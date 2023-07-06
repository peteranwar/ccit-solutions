import React from 'react'
import Link  from 'next/link'



const MainButton = ({ children, primary, isLink, linkTo, restClasses, loading, ...props }) => {

    return (
        <>
            {isLink ? <Link href={linkTo} {...props} className={`${restClasses} main-btn ${primary ? 'primary-btn' : 'secondary-btn'}`}>
                    {children}
            </Link>
                :
                <button px={4} pb={.5} {...props} className={`main-btn  ${restClasses} ${primary ? 'primary-btn' : 'secondary-btn'}`}>
                    {children}
                </button>
            }
        </>
    )
}

export default MainButton
