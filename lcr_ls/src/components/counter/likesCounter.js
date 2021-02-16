import React from "react";
import './likesCounter.css';

const EMPTY_HEART = "./img/likes/like.svg";
const FULL_HEART = './img/likes/likeActive.svg'


export default class LikesCounter extends React.Component {
    

    state = { 
        isActive: false,
        base: 123,
    }

    get LikesCount () { 
        const {isActive} = this.state;
        const {count} = this.props
        return count + (isActive ?  1: 0); 
    }

    // componentDidMount () { 
    //     this.interval = setInterval(this.increaseLikeCount,1000)
    // }

    // componentWillUnmount () { 
    //     clearInterval(this.interval)
    // }

    shouldComponentUpdate (nextProps, nextState) {  
        return !(nextProps.count % 10)
    }

    increaseLikeCount = () => { 
        this.setState((prevState) => { 
            return { 
                base: prevState.base +1
            }
        })
    }



    likeToggle = (e) => { 
        this.setState((prevState)=> { 
            return { 
                isActive: !prevState.isActive
            }
        })
    }

        render() { 
            const {isActive} = this.state;
            return( 
                <div className="likes-wrapper">
                    <div className="likes-counter">{this.LikesCount}</div>
                    <img src={isActive ? FULL_HEART :  EMPTY_HEART } alt="like" className={'like'} onClick={this.likeToggle}/>
                </div>
            )
        }
};
