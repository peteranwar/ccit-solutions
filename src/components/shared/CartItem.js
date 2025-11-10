import Image from 'next/image'
import Link from 'next/link'

import arrowUp from "../../../public/assets/images/Arrow - Up.svg"

const CartItem = ({ blog }) => {

    if (!blog) return;
    
    return (
        <div className="cart-item">
            <Link href={`/blog/${blog.title}?id=${blog.id}`}>
                <div className="img">
                    <Image src={blog.image} width={300} height={400} loading="lazy" decoding="async" alt={blog.title} />
                </div>
                <div className="details mt-3">
                    <span>{blog.created_at} . {blog.author}</span>
                    <div className="title d-flex align-items-start justify-content-between">
                        <h3>{blog.title}</h3>
                        <Image src={arrowUp} alt='arrow-up' width={30} height={30} />
                    </div>
                    <p className='blog-desc' dangerouslySetInnerHTML={{ __html: blog.description }} />
                    <div className="two-btn d-flex align-items-center justify-content-start">
                        <button type="button" className='d-flex align-items-center justify-content-center'>
                            {blog.category?.name}
                        </button>
                        {/* {btnLaravel && <button type="button" className='d-flex align-items-center justify-content-center'>Laravel</button>} */}
                        {/* {btnReact && <button type="button" className='d-flex align-items-center justify-content-center'>React</button>} */}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CartItem