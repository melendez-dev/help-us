// common icons
export const IconCloseQuote = ({
  width = 18,
  height = 30,
  color = "#434343",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 30 18"
    >
      <path
        fill={color}
        d="M18.813.11h10.49l-7.655 17.86h-6.875L18.813.11ZM4.496.11h10.49L7.331 17.97H.457L4.497.11Z"
      />
    </svg>
  );
};
export const IconOpenQuote = ({
  width = 30,
  height = 18,
  color = "#434343",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 30 18"
    >
      <path
        fill={color}
        d="M11.187 17.89H.697L8.352.03h6.875l-4.04 17.86Zm14.316 0H15.014L22.669.03h6.874l-4.04 17.86Z"
      />
    </svg>
  );
};
export const IconLove = ({ width = 60, height = 61, color = "#f3f3f3" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      fill={color}
      viewBox="0 0 60 61"
    >
      <path
        fill={color}
        d="M4.5 56V32v24Zm51 0V32v24ZM51 20c1.3 0 2.375-.438 3.225-1.313.85-.875 1.275-1.937 1.275-3.187 0-1.3-.425-2.375-1.275-3.225C53.375 11.425 52.3 11 51 11c-1.25 0-2.313.425-3.188 1.275-.874.85-1.312 1.925-1.312 3.225 0 1.25.438 2.313 1.313 3.188C48.687 19.563 49.75 20 51 20Zm0 4.5c-2.55 0-4.688-.863-6.413-2.587C42.862 20.187 42 18.05 42 15.5c0-2.5.862-4.625 2.587-6.375S48.45 6.5 51 6.5c2.5 0 4.625.875 6.375 2.625S60 13 60 15.5c0 2.55-.875 4.688-2.625 6.413C55.625 23.637 53.5 24.5 51 24.5ZM30 17c1.65 0 3.063-.575 4.237-1.725C35.412 14.125 36 12.7 36 11c0-1.65-.587-3.063-1.763-4.237C33.063 5.588 31.65 5 30 5c-1.7 0-3.125.588-4.275 1.763C24.575 7.938 24 9.35 24 11c0 1.7.575 3.125 1.725 4.275C26.875 16.425 28.3 17 30 17Zm0 4.5c-2.95 0-5.438-1.012-7.462-3.038C20.512 16.438 19.5 13.95 19.5 11c0-2.9 1.012-5.375 3.038-7.425C24.562 1.525 27.05.5 30 .5c2.9 0 5.375 1.025 7.425 3.075C39.475 5.625 40.5 8.1 40.5 11c0 2.95-1.025 5.438-3.075 7.462C35.375 20.488 32.9 21.5 30 21.5ZM16.5 34.625c0 1.75.913 3.775 2.738 6.075C21.063 43 24.65 46.575 30 51.425c5.3-4.8 8.875-8.337 10.725-10.612 1.85-2.276 2.775-4.338 2.775-6.188 0-1.6-.525-2.938-1.575-4.012C40.875 29.538 39.6 29 38.1 29c-.9 0-1.738.225-2.513.675-.775.45-1.512.975-2.212 1.575L30 34.4l-3.45-3.15c-.7-.6-1.438-1.125-2.213-1.575A4.784 4.784 0 0 0 21.9 29c-1.55 0-2.837.55-3.862 1.65-1.026 1.1-1.538 2.425-1.538 3.975Zm-4.5 0c0-2.65 1-5 3-7.05s4.3-3.075 6.9-3.075c1.5 0 2.975.35 4.425 1.05 1.45.7 2.675 1.65 3.675 2.85 1-1.2 2.212-2.15 3.638-2.85A10 10 0 0 1 38.1 24.5c2.55 0 4.837 1.025 6.862 3.075 2.025 2.05 3.038 4.4 3.038 7.05 0 2.65-.962 5.263-2.888 7.837C43.188 45.038 39.25 49.05 33.3 54.5l-3.3 3-3.3-3c-6.05-5.5-10.012-9.525-11.887-12.075-1.876-2.55-2.813-5.15-2.813-7.8ZM9 20c1.3 0 2.375-.438 3.225-1.313.85-.875 1.275-1.937 1.275-3.187 0-1.3-.425-2.375-1.275-3.225C11.375 11.425 10.3 11 9 11c-1.25 0-2.313.425-3.188 1.275C4.938 13.125 4.5 14.2 4.5 15.5c0 1.25.438 2.313 1.313 3.188S7.75 20 9 20Zm21.225 40.5V56H55.5V32H44.85v-4.5H55.5c1.25 0 2.313.438 3.188 1.313C59.562 29.688 60 30.75 60 32v28.5H30.225ZM4.5 56h25.725v4.5H0V32c0-1.25.438-2.313 1.313-3.188S3.25 27.5 4.5 27.5h10.575V32H4.5v24ZM9 24.5c-2.55 0-4.688-.863-6.412-2.587C.862 20.187 0 18.05 0 15.5c0-2.5.863-4.625 2.587-6.375C4.313 7.375 6.45 6.5 9 6.5c2.5 0 4.625.875 6.375 2.625S18 13 18 15.5c0 2.55-.875 4.688-2.625 6.413C13.625 23.637 11.5 24.5 9 24.5Z"
      />
    </svg>
  );
};
export const IconHouse = ({ width = 52, height = 61, color = "#f3f3f3" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 52 61"
    >
      <path
        fill={color}
        d="M0 60.5v-40L26.163.5 52 20.5v40H32.987V36.75H18.931V60.5H0Zm4.875-5h9.181V31.75h23.806V55.5h9.263V23L26.163 6.75 4.875 23v32.5Z"
      />
    </svg>
  );
};
export const IconVolume = ({ width = 13, height = 10, color = "#F3F3F3" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 13 10"
    >
      <path
        fill={color}
        d="M8.648 7.503a.451.451 0 0 1-.246-.069.354.354 0 0 1-.148-.182.303.303 0 0 1 .01-.223.367.367 0 0 1 .166-.172c.368-.198.671-.475.879-.804a1.93 1.93 0 0 0 .304-1.072 1.946 1.946 0 0 0-.349-1.062 2.378 2.378 0 0 0-.911-.777.4.4 0 0 1-.126-.088.335.335 0 0 1-.076-.124.302.302 0 0 1 .039-.271.372.372 0 0 1 .107-.105.47.47 0 0 1 .46-.015c.497.247.91.601 1.2 1.026.291.426.449.909.459 1.402.01.494-.129.981-.402 1.415a3.09 3.09 0 0 1-1.159 1.061.45.45 0 0 1-.207.06Z"
      />
      <path
        fill={color}
        d="M9.545 9.571a.448.448 0 0 1-.25-.075.348.348 0 0 1-.142-.193.305.305 0 0 1 .026-.227.379.379 0 0 1 .183-.164c.85-.36 1.566-.92 2.063-1.614a3.899 3.899 0 0 0 .75-2.312 3.914 3.914 0 0 0-.79-2.3c-.51-.688-1.235-1.239-2.092-1.588a.41.41 0 0 1-.13-.08.344.344 0 0 1-.084-.119.305.305 0 0 1 .016-.27.36.36 0 0 1 .097-.111.467.467 0 0 1 .454-.048c.995.404 1.837 1.042 2.43 1.84.594.797.914 1.722.924 2.669a4.52 4.52 0 0 1-.866 2.683c-.576.807-1.405 1.458-2.39 1.878a.463.463 0 0 1-.2.031ZM6.59.09 2.837 2.88H.405a.44.44 0 0 0-.286.103.326.326 0 0 0-.119.246v3.46a.33.33 0 0 0 .119.248.44.44 0 0 0 .286.102H2.76l3.834 2.874a.465.465 0 0 0 .43.057.397.397 0 0 0 .175-.125.316.316 0 0 0 .068-.186V.34a.316.316 0 0 0-.07-.187.398.398 0 0 0-.175-.125.466.466 0 0 0-.432.061Z"
      />
    </svg>
  );
};

export const IconMuteVolume = ({
  width = 11,
  height = 10,
  color = "#F3F3F3",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 11 10"
    >
      <path
        fill={color}
        d="M7.86 1.055a4.27 4.27 0 0 1 1.334 6.74l.488.49A4.96 4.96 0 0 0 8.16.432a.344.344 0 0 0-.3.619v.003Zm.837 7.212-1.32-1.32-.196-.196L.904.474.416.959 2.337 2.88H.344A.344.344 0 0 0 0 3.224V6.66a.344.344 0 0 0 .344.344h2.004l3.269 2.853a.344.344 0 0 0 .57-.258V6.73L8.11 8.652l-.175.1a.344.344 0 0 0 .309.615 6.02 6.02 0 0 0 .371-.214l.736.736.484-.478-1.117-1.117-.02-.027Z"
      />
      <path
        fill={color}
        d="M7.112 3.093a2.155 2.155 0 0 1 1.07 1.85 2.12 2.12 0 0 1-.489 1.347l.488.488a2.8 2.8 0 0 0 .688-1.835 2.846 2.846 0 0 0-1.41-2.444.344.344 0 1 0-.343.594h-.004ZM6.188.343a.344.344 0 0 0-.57-.257L3.41 2.01l2.777 2.774V.344Z"
      />
    </svg>
  );
};

export const IconPlay = ({ width = 14, height = 16, color = "#F3F3F3" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 14 16"
    >
      <path
        fill={color}
        d="M13.292 9.238 2.158 15.801A1.433 1.433 0 0 1 0 14.562V1.437C0 .317 1.21-.358 2.158.2l11.134 6.562c.215.125.394.305.518.523a1.444 1.444 0 0 1 0 1.431 1.414 1.414 0 0 1-.518.522Z"
      />
    </svg>
  );
};

export const IconPause = ({ width = 31, height = 31, color = "#F3F3F3" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 32 32"
    >
      <rect width="2" height="16" x="13" y="8" fill={color} rx="1" />
      <rect width="2" height="16" x="17" y="8" fill={color} rx="1" />
    </svg>
  );
};

export const IconArrowLeft = ({
  height = 40,
  width = 40,
  color = "#434343",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        fill={color}
        d="M40 20a20 20 0 1 1-40 0 20 20 0 0 1 40 0Zm-8.571-1.429H14.07l7.972-8.01L20 8.571 8.571 20 20 31.429l2.043-2.039-7.972-7.961H31.43V18.57Z"
      />
    </svg>
  );
};

export const IconArrowRight = ({
  height = 32,
  width = 32,
  color = "#434343",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill={color}
        d="M0 16a16 16 0 1 1 32 0 16 16 0 0 1-32 0Zm6.857 1.143h13.886l-6.377 6.408L16 25.143 25.143 16 16 6.857l-1.634 1.631 6.377 6.37H6.857v2.285Z"
      />
    </svg>
  );
};

export const IconHealt = ({ width = 79, height = 80, color = "#F3F3F3" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 79 80"
    >
      <path
        fill={color}
        d="M0 74.286h22.36V80H0v-5.714Zm41.925 2.857a2.75 2.75 0 0 1-1.209-.282 2.806 2.806 0 0 1-.97-.79L29.403 62.857H0v-5.714h30.745c.419 0 .832.096 1.21.282.377.185.709.455.97.79l8.796 11.234 14.65-22.463a2.82 2.82 0 0 1 .972-.915 2.749 2.749 0 0 1 2.568-.073c.402.2.752.494 1.02.86l7.547 10.285h9.783v5.714H67.08c-.434 0-.862-.103-1.25-.301a2.812 2.812 0 0 1-.986-.842l-6.015-8.2-14.58 22.357c-.243.375-.57.684-.953.905-.383.22-.812.345-1.251.364l-.12.003ZM25.155 40V25.714h2.795a11.073 11.073 0 0 0 7.902-3.351 11.573 11.573 0 0 0 3.278-8.077V5.714h-8.385a10.992 10.992 0 0 0-7.678 3.163 16.987 16.987 0 0 0-6.155-6.488A16.502 16.502 0 0 0 8.385 0H0v8.571c.005 4.545 1.774 8.903 4.918 12.116 3.143 3.214 7.406 5.022 11.852 5.027h2.795V40H0v5.714h39.13V40H25.155Zm5.59-28.571h2.795v2.857a5.785 5.785 0 0 1-1.639 4.039A5.535 5.535 0 0 1 27.951 20h-2.796v-2.857a5.785 5.785 0 0 1 1.64-4.04 5.535 5.535 0 0 1 3.95-1.674ZM16.77 20a11.073 11.073 0 0 1-7.901-3.352A11.573 11.573 0 0 1 5.59 8.571V5.714h2.795a11.073 11.073 0 0 1 7.902 3.352 11.573 11.573 0 0 1 3.278 8.077V20H16.77Z"
      />
    </svg>
  );
};

export const IconFamily = ({ width = 82, height = 80, color = "#F3F3F3" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 82 80"
    >
      <path
        fill={color}
        d="M55.848 8c0-4.44 3.55-8 7.979-8a7.962 7.962 0 0 1 7.978 8c0 4.44-3.55 8-7.978 8a7.962 7.962 0 0 1-7.979-8Zm15.957 72V56h9.973L71.645 25.48a8.038 8.038 0 0 0-2.911-3.962A8.004 8.004 0 0 0 64.066 20h-.479a7.964 7.964 0 0 0-4.673 1.511 7.998 7.998 0 0 0-2.906 3.969l-3.43 10.32c4.307 2.4 7.26 6.92 7.26 12.2v32h11.967ZM41.886 38a5.984 5.984 0 0 0 5.984-6 5.984 5.984 0 1 0-11.968 0c0 3.32 2.673 6 5.984 6ZM13.962 16a7.962 7.962 0 0 0 7.978-8c0-4.44-3.55-8-7.978-8a7.962 7.962 0 0 0-7.978 8c0 4.44 3.55 8 7.978 8Zm7.978 64V52h5.984V28c0-4.4-3.59-8-7.978-8H7.978C3.59 20 0 23.6 0 28v24h5.984v28H21.94Zm25.93 0V64h3.99V48c0-3.28-2.714-6-5.985-6h-7.978c-3.271 0-5.984 2.72-5.984 6v16h3.99v16H47.87Z"
      />
    </svg>
  );
};

export const IconEnergy = ({ width = 80, height = 80, color = "#F3F3F3" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 80 80"
    >
      <path
        fill={color}
        d="M40 0C18.667 0 0 17.156 0 40c0 9.422 3.289 18.089 8.756 24.933L0 73.733 6.267 80l8.755-8.755A40.054 40.054 0 0 0 40 80c10.222 0 20.489-3.911 28.267-11.733A39.778 39.778 0 0 0 80 40V0H40Zm-6.667 62.222L31.111 60l11.111-15.556L20 42.222l26.667-24.444L48.889 20 37.778 35.556 60 37.778 33.333 62.222Z"
      />
    </svg>
  );
};

export const IconBook = ({ width = 80, height = 80, color = "#F3F3F3" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 80 80"
    >
      <path
        fill={color}
        d="M0 24v46.116S18.484 69.428 40 80c21.516-10.572 40-9.884 40-9.884V24s-21.816 0-40 9.884C21.816 24 0 24 0 24Zm40 0c6.627 0 12-5.373 12-12S46.627 0 40 0 28 5.373 28 12s5.373 12 12 12Z"
      />
    </svg>
  );
};

export const IconSex = ({ width = 60, height = 80, color = "#F3F3F3" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 60 80"
    >
      <path
        fill={color}
        d="M55.126 0h-12.4a4.131 4.131 0 0 0-2.923 1.212 4.14 4.14 0 0 0 2.923 7.064h2.41l-5.166 5.207a24.507 24.507 0 0 0-15.155-5.207 24.785 24.785 0 0 0-16.797 6.547A24.847 24.847 0 0 0 5.21 48.328a24.795 24.795 0 0 0 15.471 9.26v4.482h-6.889a4.13 4.13 0 0 0-2.922 1.212 4.14 4.14 0 0 0 2.922 7.064h6.89v5.517A4.14 4.14 0 0 0 24.814 80a4.14 4.14 0 0 0 4.133-4.138v-5.517h6.889a4.13 4.13 0 0 0 2.923-1.212 4.14 4.14 0 0 0-2.923-7.064h-6.889v-4.483a24.786 24.786 0 0 0 11.121-4.91 24.826 24.826 0 0 0 7.456-9.61 24.853 24.853 0 0 0-1.94-23.514l5.407-5.414v2.414a4.14 4.14 0 0 0 1.211 2.926 4.131 4.131 0 0 0 7.056-2.926V4.138a4.14 4.14 0 0 0-1.21-2.926A4.131 4.131 0 0 0 55.126 0ZM24.815 49.655c-3.27 0-6.467-.97-9.186-2.79a16.548 16.548 0 0 1-6.09-7.428A16.569 16.569 0 0 1 13.125 21.4a16.527 16.527 0 0 1 18.018-3.588 16.538 16.538 0 0 1 7.42 6.096 16.565 16.565 0 0 1-2.056 20.9 16.524 16.524 0 0 1-11.691 4.847Z"
      />
    </svg>
  );
};

export const IconBuilding = ({
  width = 76,
  height = 80,
  color = "#F3F3F3",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 76 80"
    >
      <path
        fill={color}
        d="M50.526 37.895V12.632L37.895 0 25.263 12.632v8.42H0V80h75.79V37.895H50.526ZM16.842 71.579h-8.42v-8.421h8.42v8.42Zm0-16.842h-8.42v-8.421h8.42v8.42Zm0-16.842h-8.42v-8.421h8.42v8.42Zm25.263 33.684h-8.42v-8.421h8.42v8.42Zm0-16.842h-8.42v-8.421h8.42v8.42Zm0-16.842h-8.42v-8.421h8.42v8.42Zm0-16.842h-8.42v-8.421h8.42v8.42Zm25.263 50.526h-8.42v-8.421h8.42v8.42Zm0-16.842h-8.42v-8.421h8.42v8.42Z"
      />
    </svg>
  );
};

export const IconJudge = ({ width = 80, height = 80, color = "#F3F3F3" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 80 80"
    >
      <path
        fill={color}
        fill-rule="evenodd"
        d="M42.096 0h-4.46v9.267a6.698 6.698 0 0 0-2.945 2.065 6.664 6.664 0 0 0-1.447 3.288L16.99 18.964a2.23 2.23 0 0 0-1.242.867L2.693 38.262H0a18.875 18.875 0 0 0 .751 5.287c2.119 7.235 8.466 12.489 15.971 12.489 7.793 0 14.34-5.667 16.197-13.334.35-1.452.527-2.941.526-4.435v-.007H31.36L21.104 22.467l13.025-3.483a6.706 6.706 0 0 0 3.508 2.858v49.27h-6.69v4.444H17.57V80h44.593v-4.444H48.785V71.11h-6.69V21.844a6.691 6.691 0 0 0 3.203-2.395 6.657 6.657 0 0 0 1.257-3.789l11.46-3.062-8.175 11.846h-3.285c0 1.534.183 3.023.526 4.445 1.858 7.667 8.406 13.333 16.197 13.333 7.502 0 13.852-5.253 15.97-12.49.5-1.717.753-3.494.752-5.28v-.008h-4.339L65.195 7.756a2.228 2.228 0 0 0-2.497-1.014l-17.57 4.698a6.701 6.701 0 0 0-3.032-2.171V0Zm13.157 24.444h15.15L63.189 12.94l-7.935 11.504ZM26.05 38.262l-8.56-13.184-9.337 13.184H26.05Z"
        clip-rule="evenodd"
        opacity=".8"
      />
    </svg>
  );
};

// social icons
export const IconInstagram = ({
  width = 41,
  height = 40,
  color = "#F3F3F3",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 41 40"
    >
      <path
        fill={color}
        d="M20.5 17.52a2.48 2.48 0 1 0 0 4.958 2.48 2.48 0 0 0 0-4.958Zm9.93-2.45a6.532 6.532 0 0 0-.42-2.26 4 4 0 0 0-2.32-2.32 6.532 6.532 0 0 0-2.26-.42C24.14 10 23.76 10 20.5 10s-3.64 0-4.93.07a6.532 6.532 0 0 0-2.26.42 4 4 0 0 0-2.32 2.32 6.532 6.532 0 0 0-.42 2.26c-.07 1.29-.07 1.67-.07 4.93s0 3.64.07 4.93c.01.775.153 1.543.42 2.27.2.526.51 1.004.91 1.4.398.402.88.713 1.41.91a6.532 6.532 0 0 0 2.26.42c1.29.07 1.67.07 4.93.07s3.64 0 4.93-.07a6.532 6.532 0 0 0 2.26-.42 3.89 3.89 0 0 0 1.41-.91c.4-.396.71-.874.91-1.4a6.6 6.6 0 0 0 .42-2.27c.07-1.29.07-1.67.07-4.93s0-3.64-.07-4.93Zm-2.54 8a5.73 5.73 0 0 1-.39 1.8A3.86 3.86 0 0 1 25.37 27a5.73 5.73 0 0 1-1.81.35h-6.12a5.73 5.73 0 0 1-1.81-.35 3.51 3.51 0 0 1-1.31-.86 3.51 3.51 0 0 1-.82-1.27 5.49 5.49 0 0 1-.34-1.81v-6.12a5.49 5.49 0 0 1 .34-1.81 3.51 3.51 0 0 1 .86-1.31c.36-.36.793-.64 1.27-.82a5.73 5.73 0 0 1 1.81-.35h6.12a5.73 5.73 0 0 1 1.81.35 3.51 3.51 0 0 1 1.31.86c.362.359.642.792.82 1.27a5.73 5.73 0 0 1 .35 1.81V20c0 2.06.07 2.27.04 3.06v.01Zm-1.6-7.44a2.38 2.38 0 0 0-1.41-1.41A4.001 4.001 0 0 0 23.5 14h-6a4 4 0 0 0-1.38.26 2.38 2.38 0 0 0-1.41 1.36A4.27 4.27 0 0 0 14.5 17v6c.01.471.098.938.26 1.38a2.38 2.38 0 0 0 1.41 1.41 4.27 4.27 0 0 0 1.33.26h6a4 4 0 0 0 1.38-.26 2.38 2.38 0 0 0 1.41-1.41 4 4 0 0 0 .26-1.38v-6c0-.472-.088-.94-.26-1.38v.01Zm-5.79 8.19A3.81 3.81 0 0 1 16.69 20a3.82 3.82 0 1 1 3.81 3.82Zm4-6.89a.9.9 0 0 1 0-1.79.9.9 0 0 1 0 1.79Z"
      />
    </svg>
  );
};

export const IconFaebook = ({ width = 41, height = 40, color = "#F3F3F3" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 41 40"
    >
      <path
        fill={color}
        d="M29.4 10H11.6a1.1 1.1 0 0 0-1.1 1.1v17.8a1.102 1.102 0 0 0 1.1 1.1h9.58v-7.75h-2.6v-3h2.6V17a3.64 3.64 0 0 1 3.88-4c.778-.005 1.556.035 2.33.12v2.7H25.8c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H24.3V30h5.1a1.102 1.102 0 0 0 1.1-1.1V11.1a1.102 1.102 0 0 0-1.1-1.1Z"
      />
    </svg>
  );
};

export const IconLinkedin = ({
  width = 41,
  height = 40,
  color = "#F3F3F3",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 41 40"
    >
      <path
        fill={color}
        d="M28.97 10H12.03a1.449 1.449 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 12.03 30h16.94a1.451 1.451 0 0 0 1.47-1.43V11.43A1.45 1.45 0 0 0 28.97 10ZM16.59 26.74h-3v-9h3v9Zm-1.5-10.26a1.56 1.56 0 0 1 0-3.12 1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 21.35 21a1.998 1.998 0 0 0-.1.73v5h-3v-9h3V19a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06v5.18Z"
      />
    </svg>
  );
};
