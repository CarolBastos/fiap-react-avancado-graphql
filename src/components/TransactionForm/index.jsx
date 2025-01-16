import { useState } from "react"
import { Card, Form, Heading, Input, Label, Select } from "./styles"
import { Button } from "../Button"
import { useQuery } from "@apollo/client"
import { GET_TRANSACTIONS_TYPES } from "../../queries/getTransactionsTypes"

export const TransactionForm = () => {

    const {data, loading, error} = useQuery(GET_TRANSACTIONS_TYPES)

    const [transactionType, setTransactionType] = useState('')
    const [transactionValue, setSetTransactionValue] = useState('')

    const createTransacion = (evt) => {
        evt.preventDefault()
        console.log({
            transactionType,
            transactionValue
        })
    }

    return (
        <Card>
            <Heading>
                Nova transação
            </Heading>
            <Form onSubmit={createTransacion}>
                <Select     
                    value={transactionType} 
                    onChange={evt => setTransactionType(evt.target.value)}
                    required
                >
                    <option value="" disabled hidden>
                        Selecione o tipo de transação
                    </option>
                    {data?.getTransactionTypes.map(t => <option key={t.value} value={t.value}>{t.display}</option>)}
                </Select>
                <div>
                    <Label>
                        Valor
                    </Label>
                    <Input 
                        placeholder="00,00" 
                        type="number"
                        value={transactionValue}
                        onChange={evt => setSetTransactionValue(evt.target.value)}
                        required
                    />
                </div>
                <Button>
                    Concluir transação
                </Button>
            </Form>
        </Card>
    )
}