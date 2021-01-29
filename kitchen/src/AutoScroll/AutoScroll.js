
import React from 'React'

export default class AutoScroll extends Component {
  render() {
    return (
      <ReactAutoScroll
        targetPosition={1}
        easeType={'linear'}
        speed={7}
        updateInterval={40}
        onScrollingDone={() => console.log('scrolling finished')}
        scrollTargetRef={this.refs.scrollExample}
        isEnabled
      >
        <div
          ref="scrollExample"
          style={{ overflow: 'scroll', backgroundColor: 'red', width: '300px', height: '300px' }}
          >
           <div style={{ height: '2000px' }}>
            content
           </div>
         </div>
     </ReactAutoScroll>
    );
  }
}