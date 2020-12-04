import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount).toString() : 0,
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focused: false,
            error: ''
        };
    }
    // state = {
    //     description: this.props.expense '',
    //     amount: 0,
    //     note: '',
    //     createdAt: moment(),
    //     focused: false,
    //     error: ''
    // }
    onDescriptionChnage = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }


    }
    onNoteChange = (e) => {
        const note = e.target.value;
        /*
        if you want to set directly vlue to the setState 
        this.setState(() => ({ note:e.target.value }));
        then it will through an error then we must use 
        e.persist()
        */
        this.setState(() => ({ note }));
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }

    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ focused }));

    }
    onSubmitForm = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            const error = 'Description or amount are missing';
            this.setState(() => ({ error }))
        }
        else {
            const error = '';
            this.setState(() => ({ error }));
            this.props.onFormSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmitForm}>
                    <input
                        type="text"
                        placeholder="Add description"
                        value={this.state.description}
                        onChange={this.onDescriptionChnage} ></input>
                    <input
                        type="text"
                        placeholder="Add amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => {
                            return false
                        }}
                    ></SingleDatePicker>
                    <textarea
                        placeholder="Please enter note for your expense (Optional)"
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default ExpenseForm;