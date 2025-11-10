import Head from 'next/head'
import React from 'react'

const ComponentSeo = ({ title }) => {
    return (
        <Head>
            <title>{`CCIT Solutions ${title ? title : ''}`}</title>
        </Head>
    )
}

export default ComponentSeo