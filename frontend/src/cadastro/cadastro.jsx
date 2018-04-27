import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import cadastroForm from './cadastroForm'
import cadastroList from './cadastroList'

const URL = 'http://localhost:3003/api/cadastros'

export default class Cadastro extends Component {
    constructor(props) {
        super(props)
        this.state = { Nome: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()
    }

    refresh(Nome = '') {
        const search = Nome ? `&Nome__regex=/${Nome}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, Nome, list: resp.data}))
    }

    handleSearch() {
        this.refresh(this.state.Nome)
    }

    handleChange(e) {
        this.setState({...this.state, Nome: e.target.value })
    }

    handleAdd() {
        const Nome = this.state.Nome
        axios.post(URL, { Nome })
            .then(resp => this.refresh())
    }

    handleRemove(cadastro) {
        axios.delete(`${URL}/${cadastro._id}`)
            .then(resp => this.refresh(this.state.Nome))
    }
    
        
    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <cadastroForm 
                    Nome={this.state.Nome}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} 
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <cadastroList 
                    list={this.state.list}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}