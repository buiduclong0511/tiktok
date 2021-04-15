import { Row, Column } from '@mycv/mycv-grid'
import { useEffect, useState } from 'react'
import axios from 'axios'

import MainSidebar from '../../components/MainSidebar'
import SuggestedUser from '../../components/Following/SuggestedUsers'
export default function Following() {
    const [suggestedUsers, setSuggestedUsers] = useState([])
    useEffect(() => {
        axios.get('/api/users/suggested?page=1&per_page=12')
            .then(res => {
                setSuggestedUsers(res.data.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <Row>
                <Column 
                    size={0}
                    sizeTablet={4}
                    sizeDesktop={3}
                >
                    <MainSidebar 
                        onLogin={() => {
                            alert("login")
                        }}
                        isFollowingPage={true}
                    />
                </Column>

                <Column 
                    size={12}
                    sizeTablet={8}
                    sizeDesktop={9}
                >
                    <SuggestedUser suggestedUsers={suggestedUsers}/>
                </Column>
            </Row>
    )
}