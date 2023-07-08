import React, {useState, useEffect} from 'react'
import SiteInitialJsonData from '../SiteInitialData'

export const SiteInitialSection = () => {
    const [userData,setUserData] = useState();
    const [i, setI] = useState(0);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setI((prevI) => (prevI + 1) % SiteInitialJsonData.length);
        }, 5000);
      
        return () => {
          clearTimeout(timeoutId);
        };
      }, [i]);
      
      useEffect(() => {
        setUserData(SiteInitialJsonData[i]);

      
        // Reset the index to 0 when it reaches the array length
        if (i === SiteInitialJsonData.length) {
          setI(0);
        }
      }, [i, SiteInitialJsonData]);
      
    
  return (
    <div style={{position: "relative", marginBottom: "150px"}}>
          <section className='main-banner' style={{height: "60vh", position: "relative", display: "flex", justifyContent: "center", width: "100%", padding: "20px 100px"}}>
        <div className='flex-div w-1250'>
            <div className='w-50'></div>
            <div className={`disp-flex w-50 ${i}`}>
            <>
                    <img height="400px" src={userData?.image} alt="" />
                    <div className='intro-div'>
                    <h5>{userData?.name}</h5>
                    <span>{userData?.designation}</span>
                    </div>
                        </>


            </div>
        </div>

    </section>
    <div style={{position: "absolute", backgroundColor: "#def1f0", padding: "50px", width: "100%"}}>
    <span style={{fontSize: "24px"}}>We empower businesses and people to build stronger teams quickly to develop better software and sustainable digital systems.</span>
    </div>
    </div>
  )
}
