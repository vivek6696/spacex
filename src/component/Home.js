import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import InfiniteScroll from 'react-infinite-scroller'
function Home() {
  const [data, setData] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    loadLaunches();
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!hasMore) {
        console.log('All data fetched. Stopping further loading.');
        setHasMore(false);
      }
    }, 5000)
    return () => clearTimeout(timeout)
  }, [hasMore])

  const loadLaunches = () => {
    console.log(page)
    axios.get(`https://api.spacexdata.com/v3/launches?limit=${10*page}&page=${page}`)
      .then((res) => {
        console.log("API Response:", res.data);
        const newData = res.data;
        console.log(newData)
        setData(newData);
        setPage(page + 1);
        if (newData.length === 0) {
          setHasMore(false)
        }
      })
      .catch((err) => {
        console.log(err)
        setHasMore(false)
      }
      )
  }

  return (
    <>
      <Header />
      <section className='bg_color'>
        <div className='container my-2 bg_color1'>
          <InfiniteScroll
            pageStart={0}
            loadMore={loadLaunches}
            hasMore={hasMore}
            loader={<p className='loader' key={0}>Loading...</p>}
          >
            <div className='row'>

              {
                data.map((v, i) =>
                  <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-5' key={i}>
                    <div className="card py-3 p-3 mb-2 bg-body-tertiary" style={{ "width": "18rem;" }}>
                      <img src={v.links.mission_patch} className="card-img-top" alt="..." />
                      <hr />
                      <div className="card-body" >
                        <h5 className="card-title"><b>Mission name : </b>  {v.mission_name}</h5>
                        <p className="card-text"><b>Details : </b>  <span>{v.details ? v.details.slice(0, 50) : ""}...</span></p>
                      </div>
                      <ul className="list-group list-group-flush ">
                        <li className="list-group-item"><b>Flight No -</b>  {v.flight_number}</li>
                        <li className="list-group-item"><b>Launch date :</b> {v.launch_date_local}</li>
                      </ul>
                      <div className="card-body">
                        <a href={v.links.article_link} className="card-link">Read More..</a>

                      </div>
                    </div>
                  </div>
                )
              }



            </div>
          </InfiniteScroll>
        </div>
      </section>
    </>
  )
}

export default Home