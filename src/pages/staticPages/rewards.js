/** @format */

import Link from "next/link";
import { Container, Row, Col, Form, Modal } from 'react-bootstrap';
import { Button } from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import { FormGroup, Label, Input } from "@/styles/pages/main.style";
import React, { useState } from "react";
import Table from 'react-bootstrap/Table';

const homepage = () => {
    const options = [
        { value: "chocolate", label: "Recently Listed" },
        { value: "strawberry", label: "Recently Sold" },
        { value: "vanilla", label: "Recently Received" },
        { value: "strawberry", label: "Recently Soon" },
        { value: "strawberry", label: "Recently Low to Hight" },
        { value: "strawberry", label: "Recently Last Sale" },
        { value: "strawberry", label: "Oldest" },
    ];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <CommonPageBlockPad>
        <div className='common-center-graphics-block'>
          <svg width='385' height='460' viewBox='0 0 385 460' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M103.78 0.868164C163.583 3.04284 215.558 13.9162 253.18 92.6395C290.802 171.363 396.962 191.152 382.791 268.788C362.784 378.392 263.401 438.195 158.147 454.723C73.9432 467.945 59.5614 447.619 62.8959 435.803'
              stroke='url(#paint0_radial_552_25442)'
            />
            <path
              d='M83.3375 0.868164C143.141 3.04284 195.116 13.9162 232.738 92.6395C270.36 171.363 376.52 191.152 362.348 268.788C342.341 378.392 242.959 438.195 137.704 454.723C53.5009 467.945 39.1191 447.619 42.4536 435.803'
              stroke='url(#paint1_radial_552_25442)'
            />
            <path
              d='M62.8951 0.868164C122.699 3.04284 174.673 13.9162 212.295 92.6395C249.917 171.363 356.078 191.152 341.906 268.788C321.899 378.392 222.516 438.195 117.262 454.723C33.0586 467.945 18.6767 447.619 22.0112 435.803'
              stroke='url(#paint2_radial_552_25442)'
            />
            <path
              d='M42.4528 0.868164C102.256 3.04284 154.231 13.9162 191.853 92.6395C229.475 171.363 335.635 191.152 321.464 268.788C301.457 378.392 202.074 438.195 96.8196 454.723C12.6162 467.945 -1.76565 447.619 1.56886 435.803'
              stroke='url(#paint3_radial_552_25442)'
            />
            <defs>
              <radialGradient
                id='paint0_radial_552_25442'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(223.273 229.951) rotate(90) scale(229.083 160.811)'>
                <stop stop-color='#48BC65' />
                <stop offset='1' stop-color='#48BC65' stop-opacity='0' />
              </radialGradient>
              <radialGradient
                id='paint1_radial_552_25442'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(202.83 229.951) rotate(90) scale(229.083 160.811)'>
                <stop stop-color='#48BC65' />
                <stop offset='1' stop-color='#48BC65' stop-opacity='0' />
              </radialGradient>
              <radialGradient
                id='paint2_radial_552_25442'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(182.388 229.951) rotate(90) scale(229.083 160.811)'>
                <stop stop-color='#48BC65' />
                <stop offset='1' stop-color='#48BC65' stop-opacity='0' />
              </radialGradient>
              <radialGradient
                id='paint3_radial_552_25442'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(161.946 229.951) rotate(90) scale(229.083 160.811)'>
                <stop stop-color='#48BC65' />
                <stop offset='1' stop-color='#48BC65' stop-opacity='0' />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className='common-center-graphics-block-two'>
          <svg width='1055' height='1087' viewBox='0 0 1055 1087' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M428.067 414.183C362.466 436.275 308.443 465.335 292.928 564.135C277.414 662.936 166.264 719.635 207.83 800.176C266.511 913.882 396.644 946.774 518.88 930.233C616.669 917.001 625.852 889.953 618.219 878.083'
              stroke='url(#paint0_radial_2523_6045)'
              stroke-width='1.08296'
            />
            <path
              d='M450.739 407.448C385.138 429.54 331.115 458.6 315.6 557.4C300.086 656.2 188.937 712.9 230.502 793.441C289.183 907.146 419.316 940.039 541.552 923.498C639.341 910.266 648.524 883.218 640.892 871.348'
              stroke='url(#paint1_radial_2523_6045)'
              stroke-width='1.08296'
            />
            <path
              d='M473.411 400.712C407.809 422.804 353.786 451.863 338.272 550.664C322.757 649.464 211.608 706.164 253.174 786.705C311.855 900.41 441.987 933.302 564.223 916.762C662.012 903.529 671.195 876.481 663.563 864.611'
              stroke='url(#paint2_radial_2523_6045)'
              stroke-width='1.08296'
            />
            <path
              d='M496.083 393.976C430.482 416.068 376.459 445.128 360.944 543.928C345.43 642.729 234.28 699.428 275.846 779.969C334.527 893.675 464.66 926.567 586.896 910.026C684.685 896.794 693.868 869.746 686.235 857.876'
              stroke='url(#paint3_radial_2523_6045)'
              stroke-width='1.08296'
            />
            <g opacity='0.1' filter='url(#filter0_f_2523_6045)'>
              <path
                d='M327.943 412.449C330.811 321.868 183.29 411.532 210.274 282.017L349.723 206.65L428.7 277.05L735.931 550.914L1033.27 815.958C1041.56 826.462 1060.94 878.566 984.854 859.088C889.746 834.74 855.234 910.508 806.281 866.871C755.076 821.227 707.357 698.637 636.002 715.086C578.918 728.245 541.502 615.274 494.661 611.211C443.228 575.956 409.997 701.647 357.584 633.246C292.068 547.744 325.074 503.029 327.943 412.449Z'
                fill='url(#paint4_linear_2523_6045)'
              />
            </g>
            <defs>
              <filter
                id='filter0_f_2523_6045'
                x='0.975525'
                y='0.650391'
                width='1246.74'
                height='1086.05'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'>
                <feFlood flood-opacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='103' result='effect1_foregroundBlur_2523_6045' />
              </filter>
              <radialGradient
                id='paint0_radial_2523_6045'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(371.814 704.99) rotate(73.1249) scale(262.748 186.051)'>
                <stop stop-color='#48BC65' />
                <stop offset='1' stop-color='#48BC65' stop-opacity='0' />
              </radialGradient>
              <radialGradient
                id='paint1_radial_2523_6045'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(394.487 698.254) rotate(73.1249) scale(262.748 186.051)'>
                <stop stop-color='#48BC65' />
                <stop offset='1' stop-color='#48BC65' stop-opacity='0' />
              </radialGradient>
              <radialGradient
                id='paint2_radial_2523_6045'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(417.158 691.518) rotate(73.1249) scale(262.748 186.051)'>
                <stop stop-color='#48BC65' />
                <stop offset='1' stop-color='#48BC65' stop-opacity='0' />
              </radialGradient>
              <radialGradient
                id='paint3_radial_2523_6045'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(439.83 684.783) rotate(73.1249) scale(262.748 186.051)'>
                <stop stop-color='#48BC65' />
                <stop offset='1' stop-color='#48BC65' stop-opacity='0' />
              </radialGradient>
              <linearGradient
                id='paint4_linear_2523_6045'
                x1='374.503'
                y1='382.93'
                x2='469.513'
                y2='766.972'
                gradientUnits='userSpaceOnUse'>
                <stop offset='0.0364583' stop-color='#5D35FF' />
                <stop offset='0.0625' stop-color='#1888EF' />
                <stop offset='0.473958' stop-color='#1888EF' />
                <stop offset='1' stop-color='#3AF4BC' stop-opacity='0.58' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='common-center-graphics-block-three'>
          <svg width='508' height='467' viewBox='0 0 508 467' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g opacity='0.3' filter='url(#filter0_f_552_25431)'>
              <path
                d='M340.317 238.415C376.293 173.675 316.498 211.378 211.05 157.304C65.4074 167.226 262.161 214.602 262.161 295.961C262.161 326.807 304.34 303.155 340.317 238.415Z'
                fill='url(#paint0_linear_552_25431)'
              />
            </g>
            <defs>
              <filter
                id='filter0_f_552_25431'
                x='0.349426'
                y='0.303711'
                width='507.462'
                height='466.073'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'>
                <feFlood flood-opacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='78.5' result='effect1_foregroundBlur_552_25431' />
              </filter>
              <linearGradient
                id='paint0_linear_552_25431'
                x1='314.058'
                y1='212.913'
                x2='143.523'
                y2='240.538'
                gradientUnits='userSpaceOnUse'>
                <stop stop-color='#6946F5' />
                <stop offset='0.466146' stop-color='#1861EF' />
                <stop offset='1' stop-color='#29E9AF' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <Container>
          <div className='reward-block-main'>
            <div className='reward-block-title'>
              <h1>
                <span>Earn Rewards</span> as You Trade<br></br> and Collect on{' '}
                <span className='last-grd'>TesseractX!</span>
              </h1>
              <p>
                Dive into the universe of TesseractX, where every trade, collection, and interaction propels you towards
                exclusive rewards.{' '}
              </p>
            </div>
            <div className='reward-block-main-inner'>
              <div className='reward-block-top'>
                <div className='reward-block-top-inner'>
                  <h3>
                    <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M11 7.14044H13V9.14044H11V7.14044ZM11 11.1404H13V17.1404H11V11.1404ZM12 2.14044C6.48 2.14044 2 6.62044 2 12.1404C2 17.6604 6.48 22.1404 12 22.1404C17.52 22.1404 22 17.6604 22 12.1404C22 6.62044 17.52 2.14044 12 2.14044ZM12 20.1404C7.59 20.1404 4 16.5504 4 12.1404C4 7.73044 7.59 4.14044 12 4.14044C16.41 4.14044 20 7.73044 20 12.1404C20 16.5504 16.41 20.1404 12 20.1404Z'
                        fill='black'
                      />
                    </svg>
                    <span>Current Reward Points</span>
                  </h3>
                  <div className='reward-points-block'>
                    <img src={'../../images/award-img.svg'} alt='reward-img'></img>
                    <h2>756,123</h2>
                  </div>
                </div>
                <div className='reward-block-top-inner'>
                  <h3>
                    <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M11 7.14044H13V9.14044H11V7.14044ZM11 11.1404H13V17.1404H11V11.1404ZM12 2.14044C6.48 2.14044 2 6.62044 2 12.1404C2 17.6604 6.48 22.1404 12 22.1404C17.52 22.1404 22 17.6604 22 12.1404C22 6.62044 17.52 2.14044 12 2.14044ZM12 20.1404C7.59 20.1404 4 16.5504 4 12.1404C4 7.73044 7.59 4.14044 12 4.14044C16.41 4.14044 20 7.73044 20 12.1404C20 16.5504 16.41 20.1404 12 20.1404Z'
                        fill='black'
                      />
                    </svg>
                    <span>Current Multiplier</span>
                  </h3>
                  <div className='reward-points-block'>
                    <h4>1.75x</h4>
                  </div>
                </div>
                <div className='reward-block-top-inner'>
                  <h3>
                    <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M11 7.14044H13V9.14044H11V7.14044ZM11 11.1404H13V17.1404H11V11.1404ZM12 2.14044C6.48 2.14044 2 6.62044 2 12.1404C2 17.6604 6.48 22.1404 12 22.1404C17.52 22.1404 22 17.6604 22 12.1404C22 6.62044 17.52 2.14044 12 2.14044ZM12 20.1404C7.59 20.1404 4 16.5504 4 12.1404C4 7.73044 7.59 4.14044 12 4.14044C16.41 4.14044 20 7.73044 20 12.1404C20 16.5504 16.41 20.1404 12 20.1404Z'
                        fill='black'
                      />
                    </svg>
                    <span>Referral Rewards</span>
                  </h3>
                  <div className='reward-points-block reward-points-block-last'>
                    <h5>
                      <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M19.9998 10.9904L14.2198 3.58041C13.9294 3.27811 13.5801 3.03868 13.1934 2.87697C12.8067 2.71526 12.3909 2.63473 11.9717 2.64035C11.5526 2.64598 11.1391 2.73765 10.7569 2.90968C10.3747 3.08171 10.0319 3.33043 9.74977 3.64041L3.99977 10.9904C3.68141 11.482 3.5113 12.0548 3.50977 12.6404C3.52647 13.2018 3.69587 13.7481 3.99977 14.2204L4.05977 14.2904L9.79977 21.7004C10.0824 21.9996 10.4235 22.2375 10.802 22.3992C11.1805 22.5609 11.5882 22.643 11.9998 22.6404C12.4253 22.64 12.8461 22.5509 13.2352 22.3787C13.6243 22.2065 13.9733 21.9551 14.2598 21.6404L19.9998 14.2904C20.3135 13.7947 20.475 13.2179 20.4644 12.6314C20.4537 12.0449 20.2713 11.4744 19.9398 10.9904H19.9998ZM18.4298 13.1304L12.7598 20.3504C12.5687 20.5264 12.3219 20.6298 12.0624 20.6426C11.803 20.6554 11.5472 20.5768 11.3398 20.4204L5.64977 13.1104C5.56481 12.9678 5.5167 12.8063 5.50977 12.6404C5.51124 12.4851 5.54531 12.3318 5.60977 12.1904L11.2798 4.97041C11.4709 4.79442 11.7176 4.69103 11.9771 4.67824C12.2366 4.66545 12.4923 4.74407 12.6998 4.90041L18.3298 12.1804C18.4337 12.3414 18.4893 12.5288 18.4898 12.7204C18.483 12.8622 18.449 13.0014 18.3898 13.1304H18.4298Z'
                          fill='black'
                        />
                      </svg>
                      <span>40,000</span>
                    </h5>
                    <div className='user-profile-img'>
                      <svg width='114' height='76' viewBox='0 0 114 76' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M78.7578 37.0479C87.6668 37.0479 95.3313 29.0929 95.3313 18.7337C95.3313 8.49956 87.6265 0.917727 78.7578 0.917727C69.8912 0.917726 62.1843 8.66495 62.1843 18.8164C62.1843 29.0929 69.8488 37.0479 78.7578 37.0479ZM31.0663 38.0019C38.7732 38.0019 45.4877 31.0393 45.4877 22.0476C45.4877 13.1406 38.7308 6.55115 31.0663 6.55115C23.3615 6.55115 16.5642 13.306 16.6066 22.1323C16.6066 31.0393 23.3191 38.0019 31.0683 38.0019M7.94769 75.4169L39.4368 75.4169C35.1285 69.1602 40.3908 56.5642 49.2998 49.6863C44.7011 46.6205 38.7732 44.3413 31.026 44.3413C12.3387 44.3393 0.654293 58.1354 0.654293 69.614C0.654293 73.3455 2.72573 75.4169 7.94769 75.4169ZM52.6964 75.4169L104.779 75.4169C111.284 75.4169 113.605 73.5512 113.605 69.9045C113.605 59.2145 100.22 44.4643 78.7175 44.4643C57.2548 44.4643 43.8701 59.2145 43.8701 69.9065C43.8701 73.5512 46.1896 75.4169 52.6964 75.4169Z'
                          fill='url(#paint0_linear_4611_20944)'
                        />
                        <defs>
                          <linearGradient
                            id='paint0_linear_4611_20944'
                            x1='-20.8292'
                            y1='38.1673'
                            x2='137.686'
                            y2='39.2041'
                            gradientUnits='userSpaceOnUse'>
                            <stop stop-color='#2BD7EF' />
                            <stop offset='1' stop-color='#FB4EF1' />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className='reward-block-middle'>
                <h2 className='title-middle-block'>Tiers</h2>
                <div className='reward-block-middle-inner'>
                  <div className='reward-block-middle-inner-block first-inner-block'>
                    <h3>Bronze 100</h3>
                    <img src={'../../images/award-img-4.svg'} alt='award-img'></img>
                  </div>
                  <div className='reward-block-middle-inner-block second-inner-block'>
                    <h3>Silver 1K</h3>
                    <img src={'../../images/award-img-3.svg'} alt='award-img'></img>
                    <h4>1.25x Multiplier</h4>
                  </div>
                  <div className='reward-block-middle-inner-block third-inner-block'>
                    <h3>Gold 10K</h3>
                    <img src={'../../images/award-img-2.svg'} alt='award-img'></img>
                    <h4>1.5x Multiplier</h4>
                  </div>
                  <div className='reward-block-middle-inner-block fourth-inner-block'>
                    <h3>Platinum 100K</h3>
                    <img src={'../../images/award-img-1.svg'} alt='award-img'></img>
                    <h4>1.75x Multiplier</h4>
                  </div>
                  <div className='reward-block-middle-inner-block fifth-inner-block'>
                    <h3>Black 1M</h3>
                    <img src={'../../images/award-img-5.svg'} alt='award-img'></img>
                    <h4>2x Multiplier</h4>
                  </div>
                </div>
                <Link href={''} className='learn-more-link' onClick={handleShow}>
                  Get Points
                </Link>
                <Modal
                  show={show}
                  className='reward-modal'
                  onHide={handleClose}
                  aria-labelledby='contained-modal-title-vcenter'>
                  <Modal.Body>
                    <div className='modal-body-reward'>
                      <h2>Boost Collection</h2>
                      <div className='total-block-inner'>
                        <h4>Total</h4>
                        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M5.556 6.36406C5.46694 7.31406 5.40444 8.99531 5.96538 9.71094C5.96538 9.71094 5.70132 7.86406 8.0685 5.54687C9.02163 4.61406 9.24194 3.34531 8.90913 2.39375C8.72007 1.85469 8.37475 1.40937 8.07475 1.09844C7.89975 0.915625 8.03413 0.614062 8.28882 0.625C9.82944 0.69375 12.3263 1.12187 13.3873 3.78437C13.8529 4.95312 13.8873 6.16094 13.6654 7.38906C13.5248 8.17344 13.0248 9.91719 14.1654 10.1312C14.9794 10.2844 15.3732 9.6375 15.5498 9.17187C15.6232 8.97812 15.8779 8.92969 16.0154 9.08437C17.3904 10.6484 17.5076 12.4906 17.2232 14.0766C16.6732 17.1422 13.5685 19.3734 10.4841 19.3734C6.631 19.3734 3.56381 17.1687 2.7685 13.1781C2.44819 11.5672 2.61069 8.37969 5.09507 6.12969C5.27944 5.96094 5.581 6.11094 5.556 6.36406Z'
                            fill='url(#paint0_radial_11721_14403)'
                          />
                          <path
                            d='M11.8923 12.0969C10.472 10.2688 11.1079 8.18281 11.4564 7.35156C11.5032 7.24219 11.3782 7.13906 11.2798 7.20625C10.6689 7.62188 9.41729 8.6 8.83448 9.97656C8.04542 11.8375 8.10167 12.7484 8.56886 13.8609C8.85011 14.5313 8.52354 14.6734 8.35948 14.6984C8.20011 14.7234 8.05323 14.6172 7.93604 14.5063C7.59892 14.1826 7.35868 13.7714 7.24229 13.3188C7.21729 13.2219 7.09073 13.1953 7.03292 13.275C6.59542 13.8797 6.36886 14.85 6.35792 15.5359C6.32354 17.6563 8.07511 19.375 10.1939 19.375C12.8642 19.375 14.8095 16.4219 13.2751 13.9531C12.8298 13.2344 12.411 12.7641 11.8923 12.0969Z'
                            fill='url(#paint1_radial_11721_14403)'
                          />
                          <defs>
                            <radialGradient
                              id='paint0_radial_11721_14403'
                              cx='0'
                              cy='0'
                              r='1'
                              gradientUnits='userSpaceOnUse'
                              gradientTransform='translate(9.72097 19.422) rotate(-179.751) scale(11.0293 18.0969)'>
                              <stop offset='0.314' stop-color='#FF9800' />
                              <stop offset='0.662' stop-color='#FF6D00' />
                              <stop offset='0.972' stop-color='#F44336' />
                            </radialGradient>
                            <radialGradient
                              id='paint1_radial_11721_14403'
                              cx='0'
                              cy='0'
                              r='1'
                              gradientUnits='userSpaceOnUse'
                              gradientTransform='translate(10.3407 8.44662) rotate(90.5787) scale(11.5401 8.68476)'>
                              <stop offset='0.214' stop-color='#FFF176' />
                              <stop offset='0.328' stop-color='#FFF27D' />
                              <stop offset='0.487' stop-color='#FFF48F' />
                              <stop offset='0.672' stop-color='#FFF7AD' />
                              <stop offset='0.793' stop-color='#FFF9C4' />
                              <stop offset='0.822' stop-color='#FFF8BD' stop-opacity='0.804' />
                              <stop offset='0.863' stop-color='#FFF6AB' stop-opacity='0.529' />
                              <stop offset='0.91' stop-color='#FFF38D' stop-opacity='0.209' />
                              <stop offset='0.941' stop-color='#FFF176' stop-opacity='0' />
                            </radialGradient>
                          </defs>
                        </svg>
                        <h5>1.6M</h5>
                      </div>
                      <div className='total-block-inner-second'>
                        <h4>Available</h4>
                        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M5.556 6.36406C5.46694 7.31406 5.40444 8.99531 5.96538 9.71094C5.96538 9.71094 5.70132 7.86406 8.0685 5.54687C9.02163 4.61406 9.24194 3.34531 8.90913 2.39375C8.72007 1.85469 8.37475 1.40937 8.07475 1.09844C7.89975 0.915625 8.03413 0.614062 8.28882 0.625C9.82944 0.69375 12.3263 1.12187 13.3873 3.78437C13.8529 4.95312 13.8873 6.16094 13.6654 7.38906C13.5248 8.17344 13.0248 9.91719 14.1654 10.1312C14.9794 10.2844 15.3732 9.6375 15.5498 9.17187C15.6232 8.97812 15.8779 8.92969 16.0154 9.08437C17.3904 10.6484 17.5076 12.4906 17.2232 14.0766C16.6732 17.1422 13.5685 19.3734 10.4841 19.3734C6.631 19.3734 3.56381 17.1687 2.7685 13.1781C2.44819 11.5672 2.61069 8.37969 5.09507 6.12969C5.27944 5.96094 5.581 6.11094 5.556 6.36406Z'
                            fill='url(#paint0_radial_11721_14403)'
                          />
                          <path
                            d='M11.8923 12.0969C10.472 10.2688 11.1079 8.18281 11.4564 7.35156C11.5032 7.24219 11.3782 7.13906 11.2798 7.20625C10.6689 7.62188 9.41729 8.6 8.83448 9.97656C8.04542 11.8375 8.10167 12.7484 8.56886 13.8609C8.85011 14.5313 8.52354 14.6734 8.35948 14.6984C8.20011 14.7234 8.05323 14.6172 7.93604 14.5063C7.59892 14.1826 7.35868 13.7714 7.24229 13.3188C7.21729 13.2219 7.09073 13.1953 7.03292 13.275C6.59542 13.8797 6.36886 14.85 6.35792 15.5359C6.32354 17.6563 8.07511 19.375 10.1939 19.375C12.8642 19.375 14.8095 16.4219 13.2751 13.9531C12.8298 13.2344 12.411 12.7641 11.8923 12.0969Z'
                            fill='url(#paint1_radial_11721_14403)'
                          />
                          <defs>
                            <radialGradient
                              id='paint0_radial_11721_14403'
                              cx='0'
                              cy='0'
                              r='1'
                              gradientUnits='userSpaceOnUse'
                              gradientTransform='translate(9.72097 19.422) rotate(-179.751) scale(11.0293 18.0969)'>
                              <stop offset='0.314' stop-color='#FF9800' />
                              <stop offset='0.662' stop-color='#FF6D00' />
                              <stop offset='0.972' stop-color='#F44336' />
                            </radialGradient>
                            <radialGradient
                              id='paint1_radial_11721_14403'
                              cx='0'
                              cy='0'
                              r='1'
                              gradientUnits='userSpaceOnUse'
                              gradientTransform='translate(10.3407 8.44662) rotate(90.5787) scale(11.5401 8.68476)'>
                              <stop offset='0.214' stop-color='#FFF176' />
                              <stop offset='0.328' stop-color='#FFF27D' />
                              <stop offset='0.487' stop-color='#FFF48F' />
                              <stop offset='0.672' stop-color='#FFF7AD' />
                              <stop offset='0.793' stop-color='#FFF9C4' />
                              <stop offset='0.822' stop-color='#FFF8BD' stop-opacity='0.804' />
                              <stop offset='0.863' stop-color='#FFF6AB' stop-opacity='0.529' />
                              <stop offset='0.91' stop-color='#FFF38D' stop-opacity='0.209' />
                              <stop offset='0.941' stop-color='#FFF176' stop-opacity='0' />
                            </radialGradient>
                          </defs>
                        </svg>
                        <h5>10K</h5>
                      </div>
                      <div className='check-volume-block'>
                        <div className='check-volume-block-inner'>
                          <p>1K</p>
                        </div>
                        <div className='check-volume-block-inner'>
                          <p>10K</p>
                        </div>
                        <div className='check-volume-block-inner'>
                          <p>100K</p>
                        </div>
                        <div className='check-volume-block-inner'>
                          <p>1M</p>
                        </div>
                      </div>
                      <div className='enter-amount-block'>
                        <h3>Enter Amount</h3>
                        <input type='text' placeholder='10,000'></input>
                      </div>

                      <Button className='modal-btn'>Boost</Button>
                    </div>
                  </Modal.Body>
                </Modal>
                <Modal
                  show={show}
                  className='reward-modal'
                  onHide={handleClose}
                  aria-labelledby='contained-modal-title-vcenter'>
                  <Modal.Body>
                    <div className='modal-body-reward'>
                      <div className='fire-block'>
                        <img src={'../../images/noto_fire.png'} alt='blog-img'></img>
                      </div>
                      <h2>Get Hyper Points</h2>

                      <div className='check-volume-block'>
                        <div className='check-volume-block-inner'>
                          <p>1K</p>
                        </div>
                        <div className='check-volume-block-inner'>
                          <p>10K</p>
                        </div>
                        <div className='check-volume-block-inner'>
                          <p>100K</p>
                        </div>
                        <div className='check-volume-block-inner'>
                          <p>1M</p>
                        </div>
                      </div>
                      <div className='check-volume-block check-volume-block-second'>
                        <div className='check-volume-block-inner'>
                          <p>2x</p>
                        </div>
                        <div className='check-volume-block-inner'>
                          <p>5x</p>
                        </div>
                        <div className='check-volume-block-inner'>
                          <p>10x</p>
                        </div>
                      </div>

                      <Button className='modal-btn'>Buy</Button>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
              <div className='earn-your-block'>
                <h2 className='earn-title'>earn with your referral</h2>
                <div className='earn-your-block-main'>
                  <div className='earn-your-block-inner'>
                    <div className='earn-your-block-inner-block'>
                      <p>Invite Code</p>
                      <div className='link-earn-block'>
                        <div className='link-earn-block-flex'>
                          <svg
                            width='25'
                            height='25'
                            viewBox='0 0 25 25'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <g clip-path='url(#clip0_4611_20977)'>
                              <path
                                d='M19.5 17.1404V19.1404H7.5V17.1404C7.5 17.1404 7.5 13.1404 13.5 13.1404C19.5 13.1404 19.5 17.1404 19.5 17.1404ZM16.5 8.14044C16.5 7.5471 16.3241 6.96708 15.9944 6.47373C15.6648 5.98038 15.1962 5.59587 14.6481 5.3688C14.0999 5.14174 13.4967 5.08233 12.9147 5.19809C12.3328 5.31384 11.7982 5.59957 11.3787 6.01912C10.9591 6.43868 10.6734 6.97323 10.5576 7.55517C10.4419 8.13712 10.5013 8.74031 10.7284 9.28849C10.9554 9.83667 11.3399 10.3052 11.8333 10.6349C12.3266 10.9645 12.9067 11.1404 13.5 11.1404C14.2956 11.1404 15.0587 10.8244 15.6213 10.2618C16.1839 9.69915 16.5 8.93609 16.5 8.14044ZM19.7 13.2004C20.2466 13.7047 20.6873 14.3129 20.9964 14.9894C21.3054 15.6658 21.4766 16.3971 21.5 17.1404V19.1404H24.5V17.1404C24.5 17.1404 24.5 13.6904 19.7 13.2004ZM18.5 5.14044C18.1979 5.14046 17.8976 5.1877 17.61 5.28044C18.1951 6.11941 18.5087 7.11763 18.5087 8.14044C18.5087 9.16326 18.1951 10.1615 17.61 11.0004C17.8976 11.0932 18.1979 11.1404 18.5 11.1404C19.2956 11.1404 20.0587 10.8244 20.6213 10.2618C21.1839 9.69915 21.5 8.93609 21.5 8.14044C21.5 7.34479 21.1839 6.58173 20.6213 6.01912C20.0587 5.45651 19.2956 5.14044 18.5 5.14044ZM8.5 10.1404H5.5V7.14044H3.5V10.1404H0.5V12.1404H3.5V15.1404H5.5V12.1404H8.5V10.1404Z'
                                fill='#565660'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_4611_20977'>
                                <rect width='24' height='24' fill='white' transform='translate(0.5 0.140442)' />
                              </clipPath>
                            </defs>
                          </svg>
                          <span>BHF45J</span>
                        </div>
                        <Link href={''}>
                          <svg
                            width='25'
                            height='25'
                            viewBox='0 0 25 25'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M7.83398 9.80744C7.83398 9.10011 8.11497 8.42175 8.61513 7.92159C9.11529 7.42143 9.79365 7.14044 10.501 7.14044H19.167C19.5172 7.14044 19.864 7.20943 20.1876 7.34346C20.5112 7.47748 20.8052 7.67393 21.0528 7.92159C21.3005 8.16924 21.4969 8.46325 21.631 8.78683C21.765 9.1104 21.834 9.45721 21.834 9.80744V18.4734C21.834 18.8237 21.765 19.1705 21.631 19.4941C21.4969 19.8176 21.3005 20.1116 21.0528 20.3593C20.8052 20.6069 20.5112 20.8034 20.1876 20.9374C19.864 21.0715 19.5172 21.1404 19.167 21.1404H10.501C10.1507 21.1404 9.80394 21.0715 9.48037 20.9374C9.15679 20.8034 8.86278 20.6069 8.61513 20.3593C8.36748 20.1116 8.17103 19.8176 8.037 19.4941C7.90297 19.1705 7.83398 18.8237 7.83398 18.4734V9.80744Z'
                              stroke='#D0CFD6'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M4.84598 16.8774C4.53898 16.703 4.28363 16.4504 4.10588 16.1453C3.92814 15.8402 3.83432 15.4935 3.83398 15.1404V5.14044C3.83398 4.04044 4.73398 3.14044 5.83398 3.14044H15.834C16.584 3.14044 16.992 3.52544 17.334 4.14044'
                              stroke='#D0CFD6'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className='earn-your-block-inner-block'>
                      <p>Invite Link</p>
                      <div className='link-earn-block'>
                        <div className='link-earn-block-flex'>
                          <svg
                            width='25'
                            height='25'
                            viewBox='0 0 25 25'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M16.5624 4.02444C17.9964 2.58444 20.0944 2.55444 21.2554 3.72044C22.4194 4.88844 22.3884 7.00044 20.9524 8.44044L18.5294 10.8734C18.393 11.0151 18.3177 11.2046 18.3197 11.4013C18.3216 11.598 18.4008 11.786 18.54 11.9248C18.6793 12.0637 18.8675 12.1423 19.0642 12.1437C19.2608 12.1451 19.4502 12.0693 19.5914 11.9324L22.0154 9.49944C23.9264 7.58044 24.1664 4.51744 22.3184 2.66144C20.4684 0.804442 17.4114 1.04644 15.4984 2.96544L10.6524 7.83244C8.74144 9.75144 8.50144 12.8144 10.3494 14.6694C10.4185 14.7412 10.5011 14.7985 10.5925 14.838C10.6839 14.8775 10.7823 14.8985 10.8818 14.8995C10.9814 14.9006 11.0802 14.8819 11.1724 14.8444C11.2647 14.8069 11.3486 14.7514 11.4191 14.6812C11.4897 14.6109 11.5456 14.5273 11.5835 14.4353C11.6214 14.3432 11.6407 14.2445 11.64 14.1449C11.6394 14.0453 11.619 13.9469 11.5799 13.8553C11.5408 13.7637 11.4839 13.6808 11.4124 13.6114C10.2484 12.4434 10.2804 10.3314 11.7154 8.89144L16.5624 4.02444Z'
                              fill='#565660'
                            />
                            <path
                              d='M15.3194 9.61044C15.1789 9.46948 14.9881 9.39013 14.789 9.38985C14.5899 9.38957 14.3989 9.46838 14.2579 9.60894C14.117 9.74951 14.0376 9.94031 14.0373 10.1394C14.0371 10.3385 14.1159 10.5295 14.2564 10.6704C15.4204 11.8384 15.3894 13.9494 13.9534 15.3904L9.10644 20.2564C7.67144 21.6964 5.57344 21.7264 4.41244 20.5604C3.24844 19.3924 3.28044 17.2804 4.71544 15.8404L7.13944 13.4074C7.20898 13.3376 7.26408 13.2548 7.30162 13.1637C7.33915 13.0726 7.35837 12.9751 7.35818 12.8765C7.358 12.778 7.33841 12.6805 7.30053 12.5895C7.26266 12.4986 7.20724 12.416 7.13744 12.3464C7.06765 12.2769 6.98484 12.2218 6.89374 12.1843C6.80265 12.1467 6.70505 12.1275 6.60653 12.1277C6.50801 12.1279 6.41048 12.1475 6.31953 12.1854C6.22858 12.2232 6.14598 12.2786 6.07644 12.3484L3.65244 14.7814C1.74144 16.7014 1.50144 19.7634 3.34944 21.6194C5.19944 23.4774 8.25644 23.2344 10.1694 21.3154L15.0164 16.4484C16.9274 14.5304 17.1674 11.4654 15.3194 9.61044Z'
                              fill='#565660'
                            />
                          </svg>
                          <span>Https://Www.TesseractX.com/referral</span>
                        </div>
                        <Link href={''}>
                          <svg
                            width='25'
                            height='25'
                            viewBox='0 0 25 25'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M7.83398 9.80744C7.83398 9.10011 8.11497 8.42175 8.61513 7.92159C9.11529 7.42143 9.79365 7.14044 10.501 7.14044H19.167C19.5172 7.14044 19.864 7.20943 20.1876 7.34346C20.5112 7.47748 20.8052 7.67393 21.0528 7.92159C21.3005 8.16924 21.4969 8.46325 21.631 8.78683C21.765 9.1104 21.834 9.45721 21.834 9.80744V18.4734C21.834 18.8237 21.765 19.1705 21.631 19.4941C21.4969 19.8176 21.3005 20.1116 21.0528 20.3593C20.8052 20.6069 20.5112 20.8034 20.1876 20.9374C19.864 21.0715 19.5172 21.1404 19.167 21.1404H10.501C10.1507 21.1404 9.80394 21.0715 9.48037 20.9374C9.15679 20.8034 8.86278 20.6069 8.61513 20.3593C8.36748 20.1116 8.17103 19.8176 8.037 19.4941C7.90297 19.1705 7.83398 18.8237 7.83398 18.4734V9.80744Z'
                              stroke='#D0CFD6'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M4.84598 16.8774C4.53898 16.703 4.28363 16.4504 4.10588 16.1453C3.92814 15.8402 3.83432 15.4935 3.83398 15.1404V5.14044C3.83398 4.04044 4.73398 3.14044 5.83398 3.14044H15.834C16.584 3.14044 16.992 3.52544 17.334 4.14044'
                              stroke='#D0CFD6'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className='earn-your-block-inner-block'>
                      <p>Referrals </p>
                      <div className='link-earn-block'>
                        <div className='link-earn-block-flex'>
                          <svg
                            width='25'
                            height='25'
                            viewBox='0 0 25 25'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M20.1658 10.4904L14.3858 3.08044C14.0954 2.77814 13.7461 2.53871 13.3594 2.377C12.9727 2.21529 12.5569 2.13476 12.1378 2.14038C11.7186 2.14601 11.3052 2.23768 10.9229 2.40971C10.5407 2.58174 10.1979 2.83046 9.91578 3.14044L4.16578 10.4904C3.84742 10.982 3.67732 11.5548 3.67578 12.1404C3.69248 12.7019 3.86189 13.2481 4.16578 13.7204L4.22578 13.7904L9.96578 21.2004C10.2484 21.4997 10.5895 21.7375 10.968 21.8992C11.3465 22.0609 11.7542 22.1431 12.1658 22.1404C12.5913 22.1401 13.0121 22.0509 13.4012 21.8787C13.7904 21.7066 14.1393 21.4551 14.4258 21.1404L20.1658 13.7904C20.4795 13.2948 20.641 12.718 20.6304 12.1315C20.6197 11.5449 20.4373 10.9744 20.1058 10.4904H20.1658ZM18.5958 12.6304L12.9258 19.8504C12.7347 20.0264 12.4879 20.1298 12.2285 20.1426C11.969 20.1554 11.7133 20.0768 11.5058 19.9204L5.81578 12.6104C5.73083 12.4678 5.68271 12.3063 5.67578 12.1404C5.67726 11.9851 5.71132 11.8318 5.77578 11.6904L11.4458 4.47044C11.6369 4.29445 11.8836 4.19106 12.1431 4.17827C12.4026 4.16548 12.6583 4.2441 12.8658 4.40044L18.4958 11.6804C18.5997 11.8414 18.6553 12.0288 18.6558 12.2204C18.649 12.3622 18.615 12.5014 18.5558 12.6304H18.5958Z'
                              fill='#565660'
                            />
                          </svg>

                          <span>25</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bonuses-block'>
                <h2 className='bonuses-title'>Bonuses</h2>
                <div className='bonuses-block-inner'>
                  <div className='bonuses-block-inner-block'>
                    <div className='img-bonuses'>
                      <img src={'../../images/bonuses-img.png'} alt='bonuses-img'></img>
                    </div>
                    <h4>
                      100x <span>Bonus</span>
                    </h4>
                    <h5>70,000</h5>
                  </div>
                  <div className='bonuses-block-inner-block second-bonuses'>
                    <div className='img-bonuses'>
                      <img src={'../../images/bonuses-img-2.svg'} alt='bonuses-img'></img>
                    </div>
                    <h4>
                      10x <span>Bonus</span>
                    </h4>
                    <h5>1000</h5>
                  </div>
                  <div className='bonuses-block-inner-block third-bonuses'>
                    <div className='img-bonuses'>
                      <img src={'../../images/bonuses-img-3.svg'} alt='bonuses-img'></img>
                    </div>
                    <h4>
                      10x <span>Bonus</span>
                    </h4>
                    <h5>10,000</h5>
                  </div>
                  <div className='bonuses-block-inner-block fourth-bonuses'>
                    <div className='img-bonuses'>
                      <img src={'../../images/bonuses-img-4.png'} alt='bonuses-img'></img>
                    </div>
                    <h4>
                      10x <span>Bonus</span>
                    </h4>
                    <h5>10,000</h5>
                  </div>
                  <div className='bonuses-block-inner-block fifth-bonuses'>
                    <div className='img-bonuses'>
                      <img src={'../../images/bonuses-img-5.png'} alt='bonuses-img'></img>
                    </div>
                    <h4>
                      10x <span>Bonus</span>
                    </h4>
                    <h5>10,000</h5>
                  </div>
                  <div className='bonuses-block-inner-block six-bonuses'>
                    <div className='img-bonuses'>
                      <img src={'../../images/bonuses-img-6.png'} alt='bonuses-img'></img>
                    </div>
                    <h4>
                      10x <span>Bonus</span>
                    </h4>
                    <h5>10,000</h5>
                  </div>
                  <div className='bonuses-block-inner-block seven-bonuses'>
                    <div className='img-bonuses'>
                      <img src={'../../images/bonuses-img-7.png'} alt='bonuses-img'></img>
                    </div>
                    <h4>
                      10x <span>Bonus</span>
                    </h4>
                    <h5>10,000</h5>
                  </div>
                  <div className='bonuses-block-inner-block eigth-bonuses'>
                    <div className='img-bonuses'>
                      <img src={'../../images/bonuses-img-8.png'} alt='bonuses-img'></img>
                    </div>
                    <h4>
                      10x <span>Bonus</span>
                    </h4>
                    <h5>10,000</h5>
                  </div>
                </div>
              </div>
              <div className='reward-points-block'>
                <div className='reward-points-block-top'>
                  <h2 className='bonuses-title'>Reward Point History</h2>
                  <ul>
                    <li>
                      <a href=''>50</a>
                    </li>
                    <li>
                      <a href=''>100</a>
                    </li>
                    <li>
                      <a href=''>150</a>
                    </li>
                  </ul>
                </div>
                <div className='ranking-table-block'>
                  <Table>
                    <thead>
                      <tr>
                        <th>
                          <p>
                            Rank{' '}
                            <svg width='9' height='7' viewBox='0 0 9 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M7.94531 0.574036L4.5 4.01935L1.05469 0.574036L0 1.62872L4.5 6.12872L9 1.62872L7.94531 0.574036Z'
                                fill='#191820'
                              />
                            </svg>
                          </p>
                        </th>
                        <th>
                          <p>
                            Time{' '}
                            <svg width='9' height='7' viewBox='0 0 9 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M7.94531 0.574036L4.5 4.01935L1.05469 0.574036L0 1.62872L4.5 6.12872L9 1.62872L7.94531 0.574036Z'
                                fill='#191820'
                              />
                            </svg>
                          </p>
                        </th>
                        <th>
                          <p>
                            Type{' '}
                            <svg width='9' height='7' viewBox='0 0 9 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M7.94531 0.574036L4.5 4.01935L1.05469 0.574036L0 1.62872L4.5 6.12872L9 1.62872L7.94531 0.574036Z'
                                fill='#191820'
                              />
                            </svg>
                          </p>
                        </th>
                        <th>
                          <p>
                            Address{' '}
                            <svg width='9' height='7' viewBox='0 0 9 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M7.94531 0.574036L4.5 4.01935L1.05469 0.574036L0 1.62872L4.5 6.12872L9 1.62872L7.94531 0.574036Z'
                                fill='#191820'
                              />
                            </svg>
                          </p>
                        </th>
                        <th>
                          <p>
                            Points{' '}
                            <svg width='9' height='7' viewBox='0 0 9 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M7.94531 0.574036L4.5 4.01935L1.05469 0.574036L0 1.62872L4.5 6.12872L9 1.62872L7.94531 0.574036Z'
                                fill='#191820'
                              />
                            </svg>
                          </p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>7th January, 2024</td>
                        <td>3:36pm</td>
                        <td>Referral</td>
                        <td>0x2cfa......99cc</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>7th January, 2024</td>
                        <td>3:36pm</td>
                        <td>Referral</td>
                        <td>0x2cfa......99cc</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>7th January, 2024</td>
                        <td>3:36pm</td>
                        <td>Referral</td>
                        <td>0x2cfa......99cc</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>7th January, 2024</td>
                        <td>3:36pm</td>
                        <td>Referral</td>
                        <td>0x2cfa......99cc</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>7th January, 2024</td>
                        <td>3:36pm</td>
                        <td>Referral</td>
                        <td>0x2cfa......99cc</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>7th January, 2024</td>
                        <td>3:36pm</td>
                        <td>Referral</td>
                        <td>0x2cfa......99cc</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>7th January, 2024</td>
                        <td>3:36pm</td>
                        <td>Referral</td>
                        <td>0x2cfa......99cc</td>
                        <td>1</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </CommonPageBlockPad>
    );
};

export default homepage;
