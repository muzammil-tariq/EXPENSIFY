import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header></Header>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
                <Route path="/create" component={AddExpensePage} ></Route>
                <Route path="/help" component={HelpPage} />
                <Route path="/edit/:id" component={EditExpensePage}></Route>
                <Route component={NotFoundPage} />
            </Switch>
        </div>

    </BrowserRouter>
);
export default AppRouter;