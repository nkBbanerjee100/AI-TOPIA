"use client"
import { useState, useEffect } from 'react'
import PromptCard from './PromptCard'
import Image from 'next/image'
const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className='mt-16 prompt_layout'>
            {data.map((post) => {
                {/* console.log(post) */ }
                return (
                    < PromptCard
                        key={post._id}
                        post={post}
                        handleTagClick={handleTagClick}
                    />
                )
            })}
        </div>
    )
}
const Feed = () => {
    const [searchText, setSearchText] = useState('');
    const [post, setPost] = useState([])
    const [mainPost, setMainPost] = useState([])
    const changingFunc = (e) => {
        setSearchText(e.target.value);
        setPost(mainPost.filter((ele) => ele.tag.toLowerCase().includes(e.target.value.toLowerCase)))
    }
    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`/api/prompt`)
            const data = await response.json();
            setPost(data)
            setMainPost(data)
        }
        console.log(post);
        fetchPost()
    }, [])



    return (
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input
                    type='text'
                    placeholder='search for any tag'
                    value={searchText}
                    onChange={changingFunc}
                    required
                    className='search_input peer'
                />
                <Image src="/assets/images/mag.png" alt="magnify_glass" width={30} height={30} className='rounded-full cursor-pointer' />
            </form>

            <PromptCardList data={post}
                handleTagClick={() => { }}
            />
        </section>
    )
}

export default Feed
