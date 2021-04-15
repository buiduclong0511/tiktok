import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { Grid } from '@mycv/mycv-grid'

import HomeContainer from '../../containers/Home'
import PostDetailContainer from '../../containers/PostDetail'
import FollowingContainer from '../../containers/Following'
import ProfileContainer from '../../containers/Profile'
import AllSearchResultsContainer from '../../containers/AllSearchResults'
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
                        <Route 
                            exact 
                            path={config.routes.following}
                            component={FollowingContainer}
                        />
                        <Route
                            exact 
                            path={config.routes.profile}
                            component={ProfileContainer}
                        />
                        <Route
                            exact 
                            path={config.routes.allSearchResults}
                            component={AllSearchResultsContainer}
                        />
                    </Switch>
                </Grid>
            </Grid>
        </Router>
    )
}