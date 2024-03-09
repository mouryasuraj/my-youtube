import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/slices/appSlice";
import { YOUTUBE_SUGGESTION_API } from "../utils/constant";
import { useEffect, useState } from "react";
import { addCacheResults } from "../utils/slices/searchSlice";

const useHeader = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [showSuggestion, setShowSuggestion] = useState(false)
    const [suggestion, setSuggestion] = useState(null)
    const cacheResults = useSelector(store => store.search.cacheResults)
    const dispatch = useDispatch()

    const fetchSearchResults = async () => {
        const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
        const json = await data.json();
        setSuggestion(json[1])
        dispatch(addCacheResults({
            [searchQuery]: json[1]
        }))
    };
    /*eslint-disable */
    useEffect(() => {
        const timer = setTimeout(() => {
            if (cacheResults[searchQuery]) {
                setSuggestion(cacheResults[searchQuery])
            } else {
                fetchSearchResults()
            }
        }, 200);
        return () => clearTimeout(timer)
    }, [searchQuery]);
    /*eslint-enable */

    const handleSearch = (e) => {
        e.preventDefault();
    };

    const handleIsMenuOpen = () => {
        dispatch(toggleMenu())
    }
    const handleclearSearchBar = () => {
        setSearchQuery('')
        setShowSuggestion(true)
    }

    return { searchQuery, showSuggestion, suggestion, setShowSuggestion, handleSearch, handleIsMenuOpen, setSearchQuery, handleclearSearchBar }
}
export default useHeader