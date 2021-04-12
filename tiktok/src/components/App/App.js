import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { Grid } from '@mycv/mycv-grid'

import HomeContainer from '../../containers/Home'
import PostDetailContainer from '../../containers/PostDetail'
import HeaderComponent from '../Header'
import config from '../../config'

export default function App() {
    return (
        <Router>
            <Grid>
                <HeaderComponent />

                <Grid maxWidth={1100} type="wide">
                    <Switch>
                        <Route 
                            exact 
                            path={config.routes.home} 
                            component={HomeContainer} 
                        />
                        <Route 
                            exact
                            path={config.routes.postDetail}
                            component={PostDetailContainer}
                        />
                    </Switch>
                </Grid>
            </Grid>
        </Router>
    )
}