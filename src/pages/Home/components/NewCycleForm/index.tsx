import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useFormContext } from 'react-hook-form'
import { useContext } from "react";
import { CycleContext } from "../../../../contexts/CyclesContext";


export function NewCycleForm(){
  const {activeCycle} = useContext(CycleContext)
  const { register } = useFormContext()
  return(
    <FormContainer>
          <label htmlFor="task">Vou trabalhar em:</label>
          <TaskInput
            id="task"
            type="text"
            placeholder="Dê um nome para o seu projeto"
            disabled={!!activeCycle}
            list="task-suggestions"
            {...register('task')}
            
          />
          <datalist id="task-suggestions">
            <option>Projeto 1</option>
            <option>Projeto 2</option>
            <option>Projeto 4</option>
            <option>Projeto 5</option>
            <option>Projeto 6</option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            disabled={!!activeCycle}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>
  )
}