import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(cadastro => (
            <tr key={cadastro._id}>
                <td className={cadastro.done ? 'markedAsDone' : ''}>{cadastro.Nome}</td>
                <td>
                    <IconButton style='success' icon='check' hide={cadastro.done}
                        onClick={() => props.handleMarkAsDone(cadastro)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!cadastro.done} 
                        onClick={() => props.handleMarkAsPending(cadastro)}></IconButton>
                    <IconButton style='danger' icon='trash-o' hide={!cadastro.done} 
                        onClick={() => props.handleRemove(cadastro)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}