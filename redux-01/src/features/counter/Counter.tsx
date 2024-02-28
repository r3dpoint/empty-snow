import { useState } from "react"
import { ActionButton, Text, Content } from "@adobe/react-spectrum"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./Counter.module.css"
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
  selectStatus,
} from "./counterSlice"

export const Counter = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const status = useAppSelector(selectStatus)
  const [incrementAmount, setIncrementAmount] = useState("2")

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div>
        <ActionButton
          aria-label="decrement"
          onPress={() => dispatch(decrement())}
        >
          <Text>-</Text>
        </ActionButton>
        <Text>{count}</Text>
        <ActionButton
          aria-label="increment"
          onPress={() => dispatch(increment())}
        >
          <Text>+</Text>
        </ActionButton>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={e => {
            setIncrementAmount(e.target.value)
          }}
        />
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button
          disabled={status !== "idle"}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          onClick={() => {
            dispatch(incrementIfOdd(incrementValue))
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  )
}
