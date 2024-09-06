/** @format */

import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button } from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import { FormGroup, Label, Input } from "@/styles/pages/main.style";
import React, { useState } from "react";

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
          <div className='help-center-block'>
            <div className='help-center-block-title'>
              <h2>How can we help you?</h2>
              <p>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
            </div>
            <div className='help-center-block-form'>
              <form>
                <div className='search-box-form'>
                  <input type='text' placeholder='Search items, collections, and accounts' />
                  <button>
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M18.125 17.2411L13.405 12.5211C14.5392 11.1595 15.1048 9.41291 14.9842 7.64483C14.8635 5.87675 14.0658 4.22326 12.757 3.02834C11.4483 1.83341 9.72921 1.18906 7.95747 1.22932C6.18573 1.26958 4.49772 1.99134 3.24458 3.24448C1.99145 4.49761 1.26968 6.18562 1.22942 7.95736C1.18917 9.7291 1.83352 11.4482 3.02844 12.7569C4.22337 14.0657 5.87685 14.8634 7.64494 14.9841C9.41302 15.1047 11.1596 14.5391 12.5212 13.4049L17.2412 18.1249L18.125 17.2411ZM2.5 8.12489C2.5 7.01237 2.8299 5.92483 3.44798 4.99981C4.06606 4.07478 4.94457 3.35381 5.9724 2.92807C7.00024 2.50232 8.13124 2.39093 9.22238 2.60797C10.3135 2.82501 11.3158 3.36074 12.1025 4.14741C12.8891 4.93408 13.4249 5.93636 13.6419 7.02751C13.859 8.11865 13.7476 9.24965 13.3218 10.2775C12.8961 11.3053 12.1751 12.1838 11.2501 12.8019C10.3251 13.42 9.23752 13.7499 8.125 13.7499C6.63366 13.7482 5.20388 13.1551 4.14935 12.1005C3.09481 11.046 2.50165 9.61622 2.5 8.12489Z'
                        fill='#9E9E9E'
                      />
                    </svg>
                  </button>
                </div>
              </form>
              <div className='start-block-form-flex'>
                <div className='start-block-form'>
                  <div className='start-block-form-inner'>
                    <div className='start-block-form-block'>
                      <div className='icon-main'>
                        <svg width='33' height='27' viewBox='0 0 33 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M32.1588 2.93338L27.4057 25.349C27.0468 26.9308 26.112 27.3245 24.7833 26.5798L17.5406 21.2428L14.0463 24.6043C13.6593 24.9913 13.3365 25.3141 12.5906 25.3141L13.1115 17.9386L26.5338 5.81001C27.1177 5.29026 26.4067 5.00113 25.6271 5.522L9.03334 15.971L1.8896 13.7345C0.33597 13.2496 0.307845 12.1809 2.2136 11.435L30.1552 0.669879C31.449 0.185004 32.5807 0.957879 32.1588 2.9345V2.93338Z'
                            fill='white'
                          />
                        </svg>
                      </div>
                      <h3>Getting Started</h3>
                    </div>
                  </div>
                  <div className='start-block-form-inner'>
                    <div className='start-block-form-block'>
                      <div className='icon-main'>
                        <svg width='25' height='21' viewBox='0 0 25 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M19.4222 8.01758H23.6035C24.0983 8.01758 24.4995 8.39782 24.4995 8.86688V11.8192C24.4937 12.286 24.0959 12.6631 23.6035 12.6685H19.5182C18.3252 12.6837 17.2821 11.9095 17.0115 10.8081C16.876 10.1244 17.0662 9.41893 17.5312 8.88068C17.9961 8.34244 18.6883 8.02652 19.4222 8.01758ZM19.6048 11.1219H19.9995C20.5061 11.1219 20.9168 10.7326 20.9168 10.2524C20.9168 9.77217 20.5061 9.38287 19.9995 9.38287H19.6048C19.3625 9.38017 19.1292 9.46952 18.9568 9.63098C18.7845 9.79245 18.6875 10.0126 18.6875 10.2423C18.6875 10.7242 19.0965 11.1164 19.6048 11.1219Z'
                            fill='#F9F9FA'
                            fill-opacity='0.4'
                          />
                          <path
                            d='M19.4227 6.27877H24.5C24.5 2.31536 22.0573 0 17.9187 0H7.08133C2.94267 0 0.5 2.31536 0.5 6.22821V14.7718C0.5 18.6846 2.94267 21 7.08133 21H17.9187C22.0573 21 24.5 18.6846 24.5 14.7718V14.4078H19.4227C17.0662 14.4078 15.156 12.5971 15.156 10.3635C15.156 8.1299 17.0662 6.31921 19.4227 6.31921V6.27877Z'
                            fill='white'
                          />
                          <path
                            d='M12.9582 6.27811H6.18491C5.67656 6.27257 5.26754 5.88036 5.26758 5.39848C5.27342 4.9222 5.68242 4.53903 6.18491 4.53906H12.9582C13.4649 4.53906 13.8756 4.92836 13.8756 5.40859C13.8756 5.88881 13.4649 6.27811 12.9582 6.27811Z'
                            fill='#FB4EF1'
                          />
                        </svg>
                      </div>
                      <h3>Buying</h3>
                    </div>
                  </div>
                  <div className='start-block-form-inner'>
                    <div className='start-block-form-block'>
                      <div className='icon-main'>
                        <svg width='33' height='30' viewBox='0 0 33 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <rect opacity='0.4' x='0.5' y='15' width='8' height='15' rx='2' fill='white' />
                          <rect x='12.5' width='8' height='30' rx='2' fill='white' />
                          <rect opacity='0.4' x='24.5' y='10' width='8' height='20' rx='2' fill='white' />
                        </svg>
                      </div>
                      <h3>Buying</h3>
                    </div>
                  </div>
                  <div className='start-block-form-inner'>
                    <div className='start-block-form-block'>
                      <div className='icon-main'>
                        <svg width='35' height='34' viewBox='0 0 35 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <rect opacity='0.4' x='15.6113' y='12.2773' width='12.2778' height='13.2222' fill='white' />
                          <path
                            d='M28.834 8.49935H17.5007L15.5032 6.50185C14.9648 5.96352 14.2423 5.66602 13.4915 5.66602H6.16732C4.59482 5.66602 3.34815 6.92685 3.34815 8.49935L3.33398 25.4993C3.33398 27.0718 4.59482 28.3327 6.16732 28.3327H28.834C30.3923 28.3327 31.6673 27.0577 31.6673 25.4993V11.3327C31.6673 9.77435 30.3923 8.49935 28.834 8.49935ZM26.0007 19.8327H23.1673V22.666C23.1673 23.4452 22.5298 24.0827 21.7507 24.0827C20.9715 24.0827 20.334 23.4452 20.334 22.666V19.8327H17.5007C16.7215 19.8327 16.084 19.1952 16.084 18.416C16.084 17.6368 16.7215 16.9993 17.5007 16.9993H20.334V14.166C20.334 13.3868 20.9715 12.7493 21.7507 12.7493C22.5298 12.7493 23.1673 13.3868 23.1673 14.166V16.9993H26.0007C26.7798 16.9993 27.4173 17.6368 27.4173 18.416C27.4173 19.1952 26.7798 19.8327 26.0007 19.8327Z'
                            fill='white'
                          />
                        </svg>
                      </div>
                      <h3>Creating</h3>
                    </div>
                  </div>
                  <div className='start-block-form-inner'>
                    <div className='start-block-form-block'>
                      <div className='icon-main'>
                        <svg width='37' height='36' viewBox='0 0 37 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M13.1969 16.9396C14.8964 15.2401 17.8604 15.2401 19.5599 16.9396L20.6204 18.0001L22.7414 15.8791L21.6809 14.8186C20.2664 13.4026 18.3824 12.6211 16.3784 12.6211C14.3744 12.6211 12.4904 13.4026 11.0759 14.8186L7.89286 18.0001C6.4893 19.4082 5.70117 21.3152 5.70117 23.3033C5.70117 25.2915 6.4893 27.1985 7.89286 28.6066C8.58867 29.3034 9.41531 29.8558 10.3253 30.2322C11.2353 30.6085 12.2106 30.8014 13.1954 30.7996C14.1804 30.8016 15.156 30.609 16.0663 30.2326C16.9765 29.8562 17.8034 29.3036 18.4994 28.6066L19.5599 27.5461L17.4389 25.4251L16.3784 26.4856C15.5331 27.3271 14.3889 27.7995 13.1961 27.7995C12.0034 27.7995 10.8592 27.3271 10.0139 26.4856C9.17162 25.6407 8.69867 24.4963 8.69867 23.3033C8.69867 22.1103 9.17162 20.966 10.0139 20.1211L13.1969 16.9396Z'
                            fill='white'
                          />
                          <path
                            opacity='0.4'
                            d='M18.4998 7.3941L17.4393 8.4546L19.5603 10.5756L20.6208 9.5151C21.4661 8.67359 22.6103 8.20114 23.8031 8.20114C24.9958 8.20114 26.14 8.67359 26.9853 9.5151C27.8276 10.36 28.3005 11.5044 28.3005 12.6974C28.3005 13.8903 27.8276 15.0347 26.9853 15.8796L23.8023 19.0611C22.1028 20.7606 19.1388 20.7606 17.4393 19.0611L16.3788 18.0006L14.2578 20.1216L15.3183 21.1821C16.7328 22.5981 18.6168 23.3796 20.6208 23.3796C22.6248 23.3796 24.5088 22.5981 25.9233 21.1821L29.1063 18.0006C30.5099 16.5925 31.298 14.6855 31.298 12.6974C31.298 10.7092 30.5099 8.80217 29.1063 7.3941C27.6986 5.98981 25.7914 5.20117 23.8031 5.20117C21.8147 5.20117 19.9075 5.98981 18.4998 7.3941Z'
                            fill='white'
                          />
                        </svg>
                      </div>
                      <h3>Partner</h3>
                    </div>
                  </div>
                  <div className='start-block-form-inner'>
                    <div className='start-block-form-block'>
                      <div className='icon-main'>
                        <svg width='37' height='36' viewBox='0 0 37 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <rect opacity='0.4' x='10.5' y='10' width='15' height='16' fill='white' />
                          <path
                            d='M18.4996 21.5996C19.4544 21.5996 20.3701 21.2203 21.0452 20.5452C21.7203 19.8701 22.0996 18.9544 22.0996 17.9996C22.0996 17.0448 21.7203 16.1292 21.0452 15.454C20.3701 14.7789 19.4544 14.3996 18.4996 14.3996C17.5448 14.3996 16.6292 14.7789 15.954 15.454C15.2789 16.1292 14.8996 17.0448 14.8996 17.9996C14.8996 18.9544 15.2789 19.8701 15.954 20.5452C16.6292 21.2203 17.5448 21.5996 18.4996 21.5996ZM14.8996 4.49961C14.8996 4.26091 14.8048 4.032 14.636 3.86321C14.4672 3.69443 14.2383 3.59961 13.9996 3.59961C13.7609 3.59961 13.532 3.69443 13.3632 3.86321C13.1944 4.032 13.0996 4.26091 13.0996 4.49961V7.19961H12.1996C11.0061 7.19961 9.86154 7.67371 9.01763 8.51763C8.17371 9.36154 7.69961 10.5061 7.69961 11.6996V12.5996H4.99961C4.76091 12.5996 4.532 12.6944 4.36321 12.8632C4.19443 13.032 4.09961 13.2609 4.09961 13.4996C4.09961 13.7383 4.19443 13.9672 4.36321 14.136C4.532 14.3048 4.76091 14.3996 4.99961 14.3996H7.69961V17.0996H4.99961C4.76091 17.0996 4.532 17.1944 4.36321 17.3632C4.19443 17.532 4.09961 17.7609 4.09961 17.9996C4.09961 18.2383 4.19443 18.4672 4.36321 18.636C4.532 18.8048 4.76091 18.8996 4.99961 18.8996H7.69961V21.5996H4.99961C4.76091 21.5996 4.532 21.6944 4.36321 21.8632C4.19443 22.032 4.09961 22.2609 4.09961 22.4996C4.09961 22.7383 4.19443 22.9672 4.36321 23.136C4.532 23.3048 4.76091 23.3996 4.99961 23.3996H7.69961V24.2996C7.69961 25.4931 8.17371 26.6377 9.01763 27.4816C9.86154 28.3255 11.0061 28.7996 12.1996 28.7996H13.0996V31.4996C13.0996 31.7383 13.1944 31.9672 13.3632 32.136C13.532 32.3048 13.7609 32.3996 13.9996 32.3996C14.2383 32.3996 14.4672 32.3048 14.636 32.136C14.8048 31.9672 14.8996 31.7383 14.8996 31.4996V28.7996H17.5996V31.4996C17.5996 31.7383 17.6944 31.9672 17.8632 32.136C18.032 32.3048 18.2609 32.3996 18.4996 32.3996C18.7383 32.3996 18.9672 32.3048 19.136 32.136C19.3048 31.9672 19.3996 31.7383 19.3996 31.4996V28.7996H22.0996V31.4996C22.0996 31.7383 22.1944 31.9672 22.3632 32.136C22.532 32.3048 22.7609 32.3996 22.9996 32.3996C23.2383 32.3996 23.4672 32.3048 23.636 32.136C23.8048 31.9672 23.8996 31.7383 23.8996 31.4996V28.7996H24.7996C25.9931 28.7996 27.1377 28.3255 27.9816 27.4816C28.8255 26.6377 29.2996 25.4931 29.2996 24.2996V23.3996H31.9996C32.2383 23.3996 32.4672 23.3048 32.636 23.136C32.8048 22.9672 32.8996 22.7383 32.8996 22.4996C32.8996 22.2609 32.8048 22.032 32.636 21.8632C32.4672 21.6944 32.2383 21.5996 31.9996 21.5996H29.2996V18.8996H31.9996C32.2383 18.8996 32.4672 18.8048 32.636 18.636C32.8048 18.4672 32.8996 18.2383 32.8996 17.9996C32.8996 17.7609 32.8048 17.532 32.636 17.3632C32.4672 17.1944 32.2383 17.0996 31.9996 17.0996H29.2996V14.3996H31.9996C32.2383 14.3996 32.4672 14.3048 32.636 14.136C32.8048 13.9672 32.8996 13.7383 32.8996 13.4996C32.8996 13.2609 32.8048 13.032 32.636 12.8632C32.4672 12.6944 32.2383 12.5996 31.9996 12.5996H29.2996V11.6996C29.2996 10.5061 28.8255 9.36154 27.9816 8.51763C27.1377 7.67371 25.9931 7.19961 24.7996 7.19961H23.8996V4.49961C23.8996 4.26091 23.8048 4.032 23.636 3.86321C23.4672 3.69443 23.2383 3.59961 22.9996 3.59961C22.7609 3.59961 22.532 3.69443 22.3632 3.86321C22.1944 4.032 22.0996 4.26091 22.0996 4.49961V7.19961H19.3996V4.49961C19.3996 4.26091 19.3048 4.032 19.136 3.86321C18.9672 3.69443 18.7383 3.59961 18.4996 3.59961C18.2609 3.59961 18.032 3.69443 17.8632 3.86321C17.6944 4.032 17.5996 4.26091 17.5996 4.49961V7.19961H14.8996V4.49961ZM23.8996 17.9996C23.8996 19.4318 23.3307 20.8053 22.318 21.818C21.3053 22.8307 19.9318 23.3996 18.4996 23.3996C17.0674 23.3996 15.6939 22.8307 14.6812 21.818C13.6685 20.8053 13.0996 19.4318 13.0996 17.9996C13.0996 16.5674 13.6685 15.1939 14.6812 14.1812C15.6939 13.1685 17.0674 12.5996 18.4996 12.5996C19.9318 12.5996 21.3053 13.1685 22.318 14.1812C23.3307 15.1939 23.8996 16.5674 23.8996 17.9996Z'
                            fill='white'
                          />
                          <rect x='14.5' y='14' width='8' height='8' rx='4' fill='#FB4EF1' />
                        </svg>
                      </div>
                      <h3>Developers</h3>
                    </div>
                  </div>
                  <div className='start-block-form-inner'>
                    <div className='start-block-form-block'>
                      <div className='icon-main'>
                        <svg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <g clip-path='url(#clip0_1_30806)'>
                            <path d='M22.5 5.625H5.625V22.5L13.5 30.375H30.375V13.5L22.5 5.625Z' fill='#FD95F7' />
                            <path
                              d='M30.375 13.5H13.5V30.375H30.375V13.5Z'
                              stroke='white'
                              stroke-width='2.28687'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M22.5 5.625H5.625V22.5H22.5V5.625Z'
                              stroke='white'
                              stroke-width='2.28687'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M22.5 5.625L30.375 13.5'
                              stroke='white'
                              stroke-width='2.28687'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M5.625 5.625L13.5 13.5'
                              stroke='white'
                              stroke-width='2.28687'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M5.625 22.5L13.5 30.375'
                              stroke='white'
                              stroke-width='2.28687'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M22.5 22.5L30.375 30.375'
                              stroke='white'
                              stroke-width='2.28687'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_1_30806'>
                              <rect width='36' height='36' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h3>User Content</h3>
                    </div>
                  </div>
                  <div className='start-block-form-inner'>
                    <div className='start-block-form-block'>
                      <div className='icon-main'>
                        <svg width='37' height='36' viewBox='0 0 37 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <g clip-path='url(#clip0_1_30820)'>
                            <path
                              d='M18.25 31.5C25.7058 31.5 31.75 25.4558 31.75 18C31.75 10.5442 25.7058 4.5 18.25 4.5C10.7942 4.5 4.75 10.5442 4.75 18C4.75 25.4558 10.7942 31.5 18.25 31.5Z'
                              fill='#FD95F7'
                            />
                            <path
                              d='M7.37842 26.0044C8.61369 23.5172 9.25443 20.7771 9.25014 18C9.24777 16.6497 9.55 15.3162 10.1343 14.0988C10.7187 12.8814 11.5701 11.8115 12.6251 10.9688'
                              stroke='white'
                              stroke-width='2.25'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M18.25 18C18.2567 22.5756 17.095 27.0771 14.875 31.0781'
                              stroke='white'
                              stroke-width='2.25'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M13.75 18C13.75 16.8065 14.2241 15.6619 15.068 14.818C15.9119 13.9741 17.0565 13.5 18.25 13.5C19.4435 13.5 20.5881 13.9741 21.432 14.818C22.2759 15.6619 22.75 16.8065 22.75 18C22.7565 22.6386 21.7345 27.2209 19.7575 31.417'
                              stroke='white'
                              stroke-width='2.25'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M30.9852 25.875C31.4953 23.2811 31.7515 20.6436 31.7502 18C31.7502 14.4196 30.3279 10.9858 27.7961 8.45406C25.2644 5.92232 21.8306 4.5 18.2502 4.5C14.6698 4.5 11.236 5.92232 8.70423 8.45406C6.17249 10.9858 4.75018 14.4196 4.75018 18C4.75164 19.5328 4.4915 21.0547 3.98096 22.5'
                              stroke='white'
                              stroke-width='2.25'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M13.3015 22.5C12.821 24.8654 11.9605 27.1373 10.7534 29.2275'
                              stroke='white'
                              stroke-width='2.25'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M17.125 9.07086C17.4983 9.02512 17.874 9.00211 18.25 9.00195C20.6369 9.00195 22.9261 9.95016 24.614 11.638C26.3018 13.3258 27.25 15.615 27.25 18.002C27.249 19.5063 27.155 21.0092 26.9688 22.502'
                              stroke='white'
                              stroke-width='2.25'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M26.1169 27C25.9031 27.8325 25.6603 28.6528 25.3884 29.4609'
                              stroke='white'
                              stroke-width='2.25'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_1_30820'>
                              <rect width='36' height='36' fill='white' transform='translate(0.25)' />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h3>User Safety</h3>
                    </div>
                  </div>
                  <div className='start-block-form-inner'>
                    <div className='start-block-form-block'>
                      <div className='icon-main'>
                        <svg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <g clip-path='url(#clip0_1_30835)'>
                            <path
                              d='M4.5 28.125C5.09674 28.125 5.66903 27.8879 6.09099 27.466C6.51295 27.044 6.75 26.4717 6.75 25.875V9C6.75 8.70163 6.86853 8.41548 7.0795 8.20451C7.29048 7.99353 7.57663 7.875 7.875 7.875H30.375C30.6734 7.875 30.9595 7.99353 31.1705 8.20451C31.3815 8.41548 31.5 8.70163 31.5 9V25.875C31.5 26.4717 31.2629 27.044 30.841 27.466C30.419 27.8879 29.8467 28.125 29.25 28.125H4.5Z'
                              fill='#FD95F7'
                            />
                            <path
                              d='M13.5 15.75H24.75'
                              stroke='white'
                              stroke-width='2.25'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M13.5 20.25H24.75'
                              stroke='white'
                              stroke-width='2.25'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M4.5 28.125C5.09674 28.125 5.66903 27.8879 6.09099 27.466C6.51295 27.044 6.75 26.4717 6.75 25.875V9C6.75 8.70163 6.86853 8.41548 7.07951 8.20451C7.29048 7.99353 7.57663 7.875 7.875 7.875H30.375C30.6734 7.875 30.9595 7.99353 31.1705 8.20451C31.3815 8.41548 31.5 8.70163 31.5 9V25.875C31.5 26.4717 31.2629 27.044 30.841 27.466C30.419 27.8879 29.8467 28.125 29.25 28.125H4.5Z'
                              stroke='white'
                              stroke-width='2.25'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M4.5 28.125C3.90326 28.125 3.33097 27.8879 2.90901 27.466C2.48705 27.044 2.25 26.4717 2.25 25.875V12.375'
                              stroke='white'
                              stroke-width='2.25'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_1_30835'>
                              <rect width='36' height='36' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h3>FAQs</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </CommonPageBlockPad>
    );
};

export default homepage;
