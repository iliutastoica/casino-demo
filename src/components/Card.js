import React from 'react';

const Card = ({ id, name, url, thumb, provider, categories }) => {
    const styleIM = {
        display: 'block',
        width: '100%',
        height: 'auto',
        margin: '0 auto',
    }
    return (
        <div className='tl bg-light-green br3 pa3 ma2 dib bw2 shadow-5 w-25-ns grow mw5'>
            {/*  */}
            <img itemProp="image" className="mw-100 bg-lightest-blue" alt={name} src={thumb} style={styleIM} />
            <div className="fs-normal lh-solid">
                <h2 className="f4 fs-normal lh-solid">
                    <a className="no-underline black"
                        href={url} title={`play ` + name}
                        rel="noopener noreferrer"
                        target="_blank"
                    > {name}</a>
                </h2>
                <p className="ma0">{categories}</p>
                <p className="ma0">{provider}</p>
            </div>
        </div >
    );
}


export default Card;