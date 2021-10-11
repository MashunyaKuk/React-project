import React from 'react';
import {Switch, Route, Redirect, useHistory} from 'react-router-dom';
import MainScene from '../Scenes/MainScene';

const RootRouter = () => {
    return (
    <React.Fragment>
        <Switch>
            <Route path={'/cards'}>
                <MainScene/>
            </Route>
            <Route path={'/card/:taskID'} render={(routeProps) => {
                console.log('props', routeProps);
                return (
                    `Card details ID ${routeProps.match.params.taskID}`
                    )}}>
            </Route>
            <Route exact path={'/'}>
            <div>
                Main
            </div>
            </Route>
            <Route>
                <Redirect to={'/cards'}/>
            </Route>
        </Switch>
    </React.Fragment>
    )
}

export default RootRouter;