import { Row, Column } from '@mycv/mycv-grid'
import { useEffect, useState } from 'react'
import axios from 'axios'

import MainSidebar from '../../components/MainSidebar'
import AllSearchResultsComponent from '../../components/AllSearchResults'

export default function AllSearchResults() {
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [suggestedAccounts, setSuggestedAccounts] = useState([])
    const [hideSeeBtn, setHideSeeBtn] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    const [searchResults, setSearchResults] = useState([])

    const handleSeeToggle = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
        if (currentPage !== 1 && currentPage === totalPages && isExpanded === true) {
            setIsExpanded(false)
        }
        if (currentPage !== 1 && currentPage === totalPages && isExpanded === false) {
            setIsExpanded(true)
        }
    }

    function getSuggestedAccounts() {
        axios.get(`/api/users/suggested?page=${currentPage}`)
            .then(res => {
                const newAccounts = res.data.data
                setSuggestedAccounts(suggestedAccounts.concat(newAccounts))
                setTotalPages(res.data.meta.pagination.total_pages)
                currentPage === 1 && currentPage === totalPages && (setHideSeeBtn(true))
                currentPage !== 1 && currentPage === totalPages && (setIsExpanded(true))
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(getSuggestedAccounts, [currentPage])



    useEffect(() => {
        const searchKey = window.location.pathname.split('/').pop()
        axios.get(`/api/users/search?q=${searchKey}&type=less&page=1`)
            .then(res => {
                setSearchResults(res.data.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
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
                        suggestedAccounts={suggestedAccounts}
                        onSeeToggle={handleSeeToggle}
                        isExpanded={isExpanded}
                        hideSeeBtn={hideSeeBtn}
                    />
                </Column>

                <Column 
                    size={12}
                    sizeTablet={8}
                    sizeDesktop={9}
                >
                    <AllSearchResultsComponent 
                        searchResults={searchResults}
                    />
                </Column>
            </Row>
        </div>
    )
}