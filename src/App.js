import { useState } from 'react';
import './index.scss';
import { AnimationModal } from 'react-animation-modal';

function App() {
   const [state, setState] = useState({
      visible: false,
      closeOnOverlayClick: true,
      animation: 'fade_in',
      size: 'md',
   });

   return (
      <>
         <AnimationModal {...state} onHide={() => setState({ ...state, visible: false })}>
            <label className='p-0'>Modal Contents</label>
         </AnimationModal>
         <div className="App">
            <div className='wrapper'>
               {/* Animation */}
               <div>
                  <label>Animation</label>
                  <select value={state?.animation} onChange={(e) => setState({ ...state, animation: e.target.value })}>
                     <option value='bounce_in_down'>bounce_in_down</option>
                     <option value='bounce_in_left'>bounce_in_left</option>
                     <option value='bounce_in_right'>bounce_in_right</option>
                     <option value='bounce_in_up'>bounce_in_up</option>
                     <option value='bounce_in'>bounce_in</option>
                     <option value='bounce'>bounce</option>
                     <option value='fade_in_down'>fade_in_down</option>
                     <option value='fade_in_down'>fade_in_down</option>
                     <option value='fade_in_left'>fade_in_left</option>
                     <option value='fade_in_right'>fade_in_right</option>
                     <option value='fade_in_up'>fade_in_up</option>
                     <option value='fade_in'>fade_in</option>
                     <option value='flip_in_x'>flip_in_x</option>
                     <option value='flip_in_y'>flip_in_y</option>
                     <option value='flip'>flip</option>
                     <option value='rotate_in_down_left'>rotate_in_down_left</option>
                     <option value='rotate_in_down_right'>rotate_in_down_right</option>
                     <option value='rotate_in_up_left'>rotate_in_up_left</option>
                     <option value='rotate_in_up_right'>rotate_in_up_right</option>
                     <option value='rotate_in'>rotate_in</option>
                     <option value='slide_in_down'>slide_in_down</option>
                     <option value='slide_in_left'>slide_in_left</option>
                     <option value='slide_in_right'>slide_in_right</option>
                     <option value='slide_in_up'>slide_in_up</option>
                     <option value='zoom_in_down'>zoom_in_down</option>
                     <option value='zoom_in_left'>zoom_in_left</option>
                     <option value='zoom_in_right'>zoom_in_right</option>
                     <option value='zoom_in_up'>zoom_in_up</option>
                     <option value='zoom_in'>zoom_in</option>
                     <option value='wave_in_down'>wave_in_down</option>
                     <option value='wave_in_left'>wave_in_left</option>
                     <option value='wave_in_right'>wave_in_right</option>
                     <option value='wave_in_up'>wave_in_up</option>
                     <option value='roll_in_down'>roll_in_down</option>
                     <option value='roll_in_left'>roll_in_left</option>
                     <option value='roll_in_right'>roll_in_right</option>
                     <option value='roll_in_up'>roll_in_up</option>
                     <option value='roll'>roll</option>
                     <option value='flash'>flash</option>
                     <option value='hinge'>hinge</option>
                     <option value='jack_in_box'>jack_in_box</option>
                     <option value='jello'>jello</option>
                     <option value='pulse'>pulse</option>
                     <option value='rubber_band'>rubber_band</option>
                     <option value='shake'>shake</option>
                     <option value='swing'>swing</option>
                     <option value='vibrate'>vibrate</option>
                     <option value='wobble'>wobble</option>
                  </select>
               </div>

               {/* Size */}
               <div>
                  <label>Size</label>
                  <select value={state?.size} onChange={(e) => setState({ ...state, size: e.target.value })}>
                     <option value="sm">sm</option>
                     <option value="md">md</option>
                     <option value="lg">lg</option>
                     <option value="xl">xl</option>
                     <option value="fullScreen">fullScreen</option>
                     <option value="90px">90px</option>
                     <option value="90%">90%</option>
                  </select>
               </div>

               {/* Close on Overlay */}
               <div>
                  <label>Close on Overlay</label>
                  <select value={state?.closeOnOverlayClick} onChange={(e) => setState({ ...state, closeOnOverlayClick: e.target.value })}>
                     <option value={true}>true</option>
                     <option value={false}>false</option>
                  </select>
               </div>

               {/* Button */}
               <button onClick={() => setState({ ...state, visible: true })}>Show Modal</button>
            </div>
         </div>
      </>
   );
}

export default App;
