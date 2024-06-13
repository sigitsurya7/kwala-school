import LazyImage from "../../../component/image"
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = '2GZ2NhyX7U5EktAibzYVCYFwnDrceJxPq4UqDU2QAcjWzKPo9Tmwqg9a'
const PER_PAGE = 10
const MAX_PAGES = 5

const GaleriAll = () => {
    const [photos, setPhotos] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const [page, setPage] = useState(1)

    const fetchPhotos = async () => {
        try {
          const res = await axios.get('https://api.pexels.com/v1/search?query=school', {
            headers: {
              Authorization: API_KEY,
            },
            params: {
              per_page: PER_PAGE,
              page,
            },
          })
          const newPhotos = res.data.photos
          setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos])
          if (newPhotos.length === 0 || newPhotos.length < PER_PAGE || page >= MAX_PAGES) {
            setHasMore(false)
          }
        } catch (error) {
          console.error('Error fetching photos from Pexels API:', error)
        }
    }
    
      useEffect(() => {
        if (page <= MAX_PAGES) {
          fetchPhotos()
        }
      }, [page])
    
      const handleScroll = () => {
        if (!hasMore) return
    
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
        const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight
    
        if (window.innerHeight + scrollTop >= scrollHeight - 5) {
          setPage((prevPage) => prevPage + 1)
        }
      }
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
      }, [hasMore])

    return(
        <div className="flex flex-col justify-center items-center place-content-center gap-4">
            <div className="grid grid-cols-2 lg:grid-cols-5 p-4 gap-2 w-full">
                {
                    photos.map((item, index) => {
                        return(
                            <figure key={index} className="w-full h-44 lg:h-64">
                                <LazyImage styleClass={'w-full h-full object-cover border-black border-4 rounded-md hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]'} src={item.src.medium} alt={item.alt} />
                            </figure>
                        )
                    })
                }
            </div>
            {!hasMore && <p className="text-center text-gray-500 mb-8">Tidak ada foto untuk di tampilkan</p>}
        </div>
    )
}

export default GaleriAll