"use client"

// Importing necessary modules and types from React and custom components
import * as React from "react"

// Importing types from the custom toast component
import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

// Setting the maximum number of toasts that can be displayed at one time
const TOAST_LIMIT = 1
// Setting the delay for removing a toast after it's dismissed
const TOAST_REMOVE_DELAY = 1000000

// Defining the type for a toast object
type ToasterToast = ToastProps & {
  id: string; // Unique identifier for the toast
  title?: React.ReactNode; // Title content of the toast
  description?: React.ReactNode; // Description content of the toast
  action?: ToastActionElement; // Action component for the toast
}

// Defining action types for the reducer
const actionTypes = {
  ADD_TOAST: "ADD_TOAST", // Action to add a new toast
  UPDATE_TOAST: "UPDATE_TOAST", // Action to update an existing toast
  DISMISS_TOAST: "DISMISS_TOAST", // Action to dismiss a toast
  REMOVE_TOAST: "REMOVE_TOAST", // Action to remove a toast
} as const

// Counter for generating unique toast IDs
let count = 0

/**
 * Generates a unique ID for a toast.
 * 
 * @returns {string} A unique string ID.
 */
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

// Defining the different types of actions that can be dispatched
type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

// Defining the state structure for the toast context
interface State {
  toasts: ToasterToast[]; // Array of toast objects
}

// Map to store timeout references for removing toasts
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

/**
 * Reducer function to manage the state of the toasts.
 * 
 * @param {State} state - The current state.
 * @param {Action} action - The action to perform on the state.
 * @returns {State} The new state after applying the action.
 */
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

// Array to store listeners for state changes
const listeners: Array<(state: State) => void> = []

// Initial state of the toast context
let memoryState: State = { toasts: [] }

// Function to dispatch actions and update the state
function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}
// Defining the toast type, excluding the 'id' property
type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

/**
 * Custom hook to manage the state of toasts.
 * 
 * @returns {object} An object containing the current state and functions to manipulate the toasts.
 */
function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
