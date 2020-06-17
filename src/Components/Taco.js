import React from 'react'
export default function Taco(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 450"
      dangerouslySetInnerHTML={{
        __html: `<defs>
        <linearGradient id="a">
            <stop offset="0" stop-color="#d7f4e3" />
            <stop offset="1" stop-color="#d7f4e3" stop-opacity="0" />
        </linearGradient>
        <linearGradient
            id="c"
            y2="545.54"
            gradientUnits="userSpaceOnUse"
            x2="9.349"
            y1="43.296"
            x1="106.51"
        >
            <stop offset="0" stop-color="#e3b200" />
            <stop offset="1" stop-color="#a80" />
        </linearGradient>
        <linearGradient
            id="d"
            y2="163.92"
            xlink:href="#a"
            gradientUnits="userSpaceOnUse"
            x2="107.92"
            y1="175.41"
            x1="44.947"
        />
        <linearGradient
            id="e"
            y2="479.08"
            gradientUnits="userSpaceOnUse"
            x2="-168.67"
            y1="-40.048"
            x1="435.34"
        >
            <stop offset="0" stop-color="#a80" />
            <stop offset="1" stop-color="#eeb534" stop-opacity="0" />
        </linearGradient>
        <linearGradient
            id="f"
            y2="285.08"
            gradientUnits="userSpaceOnUse"
            x2="103.97"
            y1="30.418"
            x1="272.67"
        >
            <stop offset="0" stop-color="#eeb534" />
            <stop offset="1" stop-color="#eeb534" stop-opacity="0" />
        </linearGradient>
        <filter id="b" color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation="5.099" />
        </filter>
    </defs>
    <path
        d="M232.76 9.585c-10.704-.048-21.267 1.266-31.312 4.25-1.382.41-2.758.85-4.125 1.312-5.577.986-11.004 2.471-16.25 4.719-1.744.505-3.587 1.067-5.438 1.625l-4.656-4.031-5.156 7.125c-14.017 4.559-30.033 10.497-46.28 18.125-5.998-1.986-14.088-2.314-17.657 1.062-2.701 2.556-1.689 5.158-.687 8.282-18.313 10.135-36.033 22.572-50.47 37.75a177.746 177.746 0 00-10.405 12.968l-1.625-.218.468 1.844a177.98 177.98 0 00-8.812 13.656c-1.236.627-2.05 1.283-2.25 2-.134.48-.024.983.25 1.53-8.484 15.343-14.742 31.919-18.437 49.22-3.078 14.408-3.82 42.873-1.531 58.438 1.983 13.484 6.99 33.38 12.094 48.062 9.601 27.617 22.728 44.492 37.219 47.906 3.856.908 4.866 1.152 7.656.562-.082.048-.168.077-.25.125 1.819-.306 4.022-.92 6.406-1.719a31.79 31.79 0 003.281-1.156c.175-.066.356-.151.531-.218.177-.078.35-.136.532-.22 7.715-3.002 16.095-7.152 19.625-9.468 58.434-38.335 116.82-72.679 176.81-108.62 41.573-24.172 70.448-41.409 75.938-45.438 1.557-1.143 2.934-2.284 4.25-3.406 3.742-2.332 7.49-4.637 11.25-7 8.306-5.221 6.603-18.945 6.25-28.75-.532-14.763-4.497-30.115-12.5-42.531-11.71-18.165-28.192-34.3-47.094-45.25-5.734-3.681-11.73-6.893-17.906-9.531-18.39-7.86-39.28-12.908-59.72-13z"
        opacity=".5"
        filter="url(#b)"
        transform="translate(24.066 22.516) scale(1.2075)"
    />
    <path
        d="M94.515 414.132C77.018 410.01 61.193 389.626 49.6 356.28c-6.164-17.728-12.21-41.757-14.605-58.039-2.764-18.795-1.86-53.162 1.856-70.56 7.762-36.333 24.744-70.038 49.282-97.808 44.523-46.81 114.76-72.073 157.373-84.423 19.89-8.522 41.804-8.013 65.414-8.031 19.998-.016 35.4 2.344 52.773 8.085 14.117 4.665 35.83 14.636 41.82 19.205 2.147 1.638 4.244 2.977 4.66 2.977 1.704 0 12.703 9.157 22.158 18.445 16.267 15.981 27.758 35.346 34.86 58.748 2.552 8.407 3.163 12.958 3.253 24.236.103 12.783-.155 14.455-3.242 21.047-4.5 9.61-10.04 16.116-19.858 23.322-9.04 6.633-70.287 42.786-151.88 89.646-71.533 41.085-104.49 60.967-138.258 83.405-34.97 23.239-37.49 24.705-46.44 27.035-7.969 2.075-7.847 2.07-14.255.56z"
        fill="#f1ca00"
    />
    <path
        d="M235.91 17.344c-19.625.015-37.033-.257-52.219 6.25a4.992 4.992 0 01-.594.188c-34.913 10.118-92.245 31-127.94 68.438-.04.042-.084.082-.125.125a173.71 173.71 0 00-39.562 78.594c-2.831 13.255-3.608 42.144-1.469 56.688 1.91 12.988 6.898 32.84 11.875 47.156 9.347 26.883 22.055 41.962 33.625 44.688 5.338 1.257 2.81 1.28 9.407-.438 3.565-.928 5.063-1.38 9.875-4.188s12.587-7.912 27.062-17.53c28.08-18.66 55.48-35.177 114.75-69.22 33.77-19.395 63.337-36.583 85.375-49.593 22.038-13.01 37.073-22.25 39.969-24.375 7.7-5.652 11.45-10.095 14.875-17.406 1.232-2.631 1.664-3.67 1.937-5.438.273-1.768.324-4.586.281-9.844-.073-9.162-.464-11.95-2.5-18.656-5.68-18.69-14.73-33.894-27.6-46.54-3.81-3.744-7.98-7.499-11.28-10.25-1.65-1.375-3.098-2.513-4.093-3.219-.39-.276-.622-.415-.813-.53.206.069.475.155 1.344.155-1.066 0-1.267-.178-1.563-.312-.088-.04-.389-.062-.468-.094-.346-.137-.56-.257-.782-.375a16.967 16.967 0 01-1.28-.75 43.576 43.576 0 01-2.782-1.969c-1.558-1.188-7.404-4.388-13.844-7.343-6.44-2.956-13.78-5.943-19.344-7.782-13.94-4.606-25.957-6.45-42.125-6.437z"
        fill="url(#c)"
        transform="translate(24.066 22.516) scale(1.2075)"
    />
    <path
        d="M71.596 145.27l17.228 2.302 10.59-3.482 2.606 11.2 8.92 1.59s-1.529 25.801 1.892 19.51c3.422-6.293 15.498-9.51 15.498-9.51l1.649 7.962-18.39 12.828s-21.362 12.3-20.649 3.991c.713-8.309 4.053-18.45 4.053-18.45l-5.07-1.67-3.828-12.951-10.936 1.12z"
        fill="#73cb2b"
    />
    <path
        d="M54.266 324.946c11.587 8.66 37.558-3.872 40.77-13.59 3.21-9.718-11.18-8.14-10.57-15.1.61-6.96 13.763-9.738 16.61-16.61 2.847-6.872-4.185-15.201 0-21.14 4.185-5.938 13.588-4.786 21.14-7.55s11.53 4.195 24.16-9.06 7.164-51.745 25.67-80.03c18.505-28.282 89.09-78.518 89.09-78.518s-64.23 18.772-78.52 10.57c-14.29-8.202-1.175-13.61-7.55-18.12s-21.506-6.876-27.18-1.51c-5.672 5.366 2.244 10.897 0 19.63-2.242 8.733-7.464 19.8-16.61 30.2-9.144 10.4-26.963 21.817-39.26 28.69-12.295 6.873-32.002 9.224-33.219 13.59-1.217 4.367 13.7 10.828 12.08 22.651-1.619 11.822-36.457 28.731-31.71 33.22 4.747 4.488 30.774-4.773 37.75 9.06 6.975 13.832-17.611 33.89-21.14 49.83-3.528 15.937-13.096 35.13-1.51 43.79z"
        fill="#549c1c"
    />
    <path
        d="M105.758 297.898l-4.87-16.685 1.848-10.993-11.465-.89-2.914-8.578s-25.277 5.396-19.571 1.066 7.067-16.753 7.067-16.753l-8.12-.431-9.913 20.112s-8.942 22.971-.836 21.015c8.107-1.956 17.63-6.785 17.63-6.785l2.414 4.761 13.38 1.834.54 10.98z"
        fill="#73cb2b"
    />
    <path
        d="M107.824 289.64l8.211-15.32 9.02-6.552-7.56-8.666 3.929-8.163s-21.82-13.854-14.716-12.948c7.105.906 16.778-7.007 16.778-7.007l-5.493-5.995-21.163 7.41S74.36 242.53 81.514 246.813c7.156 4.282 17.335 7.505 17.335 7.505l-1.612 5.09 8.266 10.68-7.306 8.215zM97.593 284.399l-15.509 7.847-11.146.2 1.228 11.434-7.898 4.437s9.94 23.86 4.637 19.045c-5.303-4.815-17.765-3.875-17.765-3.875l1.066 8.061 21.588 6.057s24.222 4.578 20.812-3.032-9.903-16.087-9.903-16.087l4.237-3.247-.65-13.49 10.694-2.544z"
        fill="#456f00"
    />
    <path
        d="M75.091 383.124c-.894 9.03 6.385 20.122 15.1 22.65 4.761 1.38 9.399-3.392 13.59-6.04 3.924-2.478 6.218-7.45 10.57-9.06 3.305-1.222 7.692 2.033 10.57 0 13.524-9.55 8.203-32.547 16.61-46.81 17.745-30.104 51.864-48.327 69.46-78.519 8.575-14.714 25.408-33.736 16.61-48.319-15.262-25.295-63.71-30.998-87.579-13.59-7.822 5.705-2.979 19.133-4.53 28.69-.49 3.022.826 7.08-1.51 9.06-6.144 5.205-17.06-3.8-24.16 0-3.2 1.712-4.988 5.586-6.04 9.06-1.312 4.335 1.734 9.404 0 13.59-2.723 6.576-12.79 8.367-15.1 15.1-1.316 3.838 2.828 8.241 1.51 12.08-1.385 4.04-8.375 4.844-9.059 9.06-.721 4.443 6.392 7.591 6.04 12.08-.339 4.316-4.207 7.818-7.55 10.57-4.696 3.864-15.394 1.59-16.61 7.55-1.637 8.028 13.64 10.483 16.61 18.119 1.277 3.284-1.708 7.488 0 10.57 2.302 4.153 11.543 2.832 12.08 7.55.886 7.78-15.839 8.818-16.61 16.61z"
        fill="#5a3c08"
    />
    <path
        d="M96.67 350.376c-.926 2.34-.928 5.942 1.068 7.474 3.554 2.73 10.013 1.393 13.347-1.601 1.766-1.586.39-4.899 1.601-6.94 1.094-1.843 4.28-2.194 4.805-4.271.51-2.02-.276-4.933-2.135-5.873-2.815-1.422-5.954 3.11-9.076 2.67-2.297-.325-3.553-3.66-5.872-3.737-2.229-.076-5.793.974-5.873 3.203-.106 2.96 7.321 1.847 7.474 4.804.118 2.276-4.5 2.152-5.338 4.271zM84.313 399.244c-.557 6.103 11.273 5.368 17.365 6.04 6.547.722 14.154 1.395 19.63-2.265 2.154-1.44 2.058-4.855 3.775-6.795 2.27-2.563 7.883-2.643 8.305-6.04.485-3.901-3.721-8.168-7.55-9.06-4.827-1.125-8.805 4.744-13.59 6.04-4.4 1.191-10.723-2.033-13.59 1.51-1.591 1.966 2.175 5.457.755 7.55-1.03 1.516-3.495 1.118-5.285 1.51-3.234.708-9.514-1.786-9.815 1.51zM109.483 308.742c-5.177.787-11.278.453-15.481-2.67-1.278-.949-2.639-2.76-2.135-4.27.503-1.51 2.907-1.315 4.27-2.136 1.312-.79 2.229-2.409 3.737-2.67 2.554-.44 5.406 3.697 7.474 2.136 1.705-1.286 1.008-4.523 0-6.406-.908-1.697-4.427-1.316-4.804-3.203-.252-1.258 1.063-2.499 2.135-3.203 1.663-1.093 4.657.507 5.873-1.068 1.417-1.837-1.99-5.134-.534-6.94 3.27-4.056 10.984-4.764 15.481-2.136 6.277 3.669 10.577 13.486 8.008 20.288-3.178 8.413-15.132 10.927-24.023 12.279z"
        fill="#2b1100"
    />
    <path
        d="M121.52 246.81c-6.327 3.73-3.542 14.942-8.566 20.3-2.174 2.318-7.008 1.473-8.528 4.264-1.537 2.822-1.451 7.573 1.057 9.584 2.517 2.019 6.413-1.398 9.622-1.056 4.47.476 8.537 5.71 12.792 4.263 2.428-.825 2.875-4.246 4.302-6.377 2.857-4.266 4.743-9.358 8.528-12.83 3.285-3.013 9.461-2.58 11.735-6.414 1.27-2.142 1.581-5.547 0-7.472-2.303-2.803-7.091-1.568-10.679-2.113-6.715-1.018-14.412-5.601-20.263-2.15zm7.471 43.771c-4.463 1.297-7.908 4.89-11.773 7.471-3.604 2.407-6.354 6.837-10.641 7.472-2.227.33-4.384-3.085-6.415-2.113-2.74 1.31-1.562 5.975-3.207 8.528-2.458 3.812-9.952 5.098-9.623 9.622.259 3.55 5.011 6.196 8.566 6.377 4.14.21 6.852-7.972 10.679-6.377 1.352.563 1.115 2.8 1.057 4.264-.226 5.62-8.829 11.573-5.359 16 2.648 3.376 9.03.936 12.83-1.057 4.48-2.35 7.106-7.347 9.622-11.736 1.515-2.64 1.595-5.96 3.17-8.565 2.48-4.1 6.168-7.358 9.622-10.68 4.011-3.856 11.699-5.23 12.83-10.678.647-3.118-1.59-6.86-4.302-8.528-4.841-2.98-11.596-1.586-17.056 0zm14.943 43.772c-10.012-2.626-6.064 20.995-13.886 27.772-3.406 2.952-8.512 2.973-12.83 4.264-5.288 1.582-10.74 5.937-16 4.264-7.94-2.525-14.204-11.07-15.999-19.206-1.188-5.39 8.003-11.94 4.264-16-2.692-2.923-9.874-1.398-11.735 2.113-3.28 6.19 8.191 12.21 8.528 19.207.162 3.377-3.984 6.332-3.208 9.622.924 3.913 5.98 5.419 8.528 8.528 4.07 4.968 5.397 12.383 10.68 16.037 3.906 2.703 9.48 4.986 13.885 3.207 7.875-3.178 9.02-14.398 13.887-21.358 4.082-5.838 10.409-10.393 12.83-17.093 2.421-6.704 7.95-19.55 1.056-21.358zm-14.943 1.094c-5.498-1.834-8.526 7.853-12.83 11.736-3.175 2.864-9.878 4.261-9.584 8.528.264 3.835 6.033 7.887 9.584 6.414 1.682-.697-.176-4.018 1.057-5.358 3.516-3.82 12.25.152 14.98-4.264 3.043-4.92 2.28-15.225-3.207-17.056z"
        fill="#a05e00"
    />
    <path
        d="M119.626 265.501c-2.3-.296-5.619 1.43-5.872 3.737-.247 2.252 5.06 2.555 4.805 4.805-.19 1.668-4.47 1.002-4.271 2.67.332 2.793 5.346 3.582 8.008 2.669 2.427-.833 4.476-3.849 4.27-6.407-.272-3.389-3.568-7.04-6.94-7.474zM119.652 372.268c.05-3.06 2.367-6.736 5.338-7.474 2.704-.671 6.37 1.18 7.474 3.737.737 1.706-.73 3.698-1.601 5.339-1.187 2.233-2.999 4.102-4.805 5.872-2.262 2.218-5.019 7.875-7.474 5.873-2.467-2.012 4.469-5.365 4.27-8.542-.119-1.921-3.233-2.88-3.202-4.805z"
        fill="#deaa87"
    />
    <path
        d="M147.09 156.511l-21.546-30.747s3.85-13.47 9.441-16.379c3.897-2.028 13.127 1.163 13.127 1.163l13.923 15.432 12.615 22.306-33.86 8.11z"
        fill="#f8010a"
    />
    <path
        d="M82.062 160.41c-8.437.743-18.227.304-25.125 5.813-2.994 3.165-2.003 7.78.844 10.593 1.453 3.187 4.962 4.964 8.151 3.247 7.013-.69 14.025-1.37 21.037-2.06L92 160.443c-3.312-.063-6.625-.09-9.937-.031z"
        opacity=".325"
        fill="url(#d)"
        transform="scale(1.2075) rotate(60.51 150.033 181.81)"
    />
    <path
        d="M158.338 178.972l-31.776 19.997s-13.263-4.513-15.891-10.24c-1.832-3.993 1.811-13.053 1.811-13.053l16.103-13.143 22.902-11.495 6.424 34.22z"
        fill="#f8010a"
    />
    <path
        d="M82.062 160.41c-8.437.743-18.227.304-25.125 5.813-2.994 3.165-2.003 7.78.844 10.593 1.453 3.187 4.962 4.964 8.151 3.247 7.013-.69 14.025-1.37 21.037-2.06L92 160.443c-3.312-.063-6.625-.09-9.937-.031z"
        opacity=".325"
        fill="url(#d)"
        transform="scale(1.2075) rotate(-26.653 42.397 79.131)"
    />
    <path
        d="M71.573 184.198l5.896 6.377s3.21-7.23 6.497-7.446c2.879-.188 3.636 6.123 6.493 5.722 5.909-.828 3.697-14.772 9.656-15.071 5.746-.288 5.154 12.072 10.72 13.528 4.404 1.151 9.181-2.215 12.634-5.18 2.46-2.113 1.868-7.529 5.007-8.34 3.42-.884 9.174 5.305 9.174 5.305l-2.141-13.645s-5.849-3.91-8.877-3.1c-5.161 1.305-8.684 17.188-11.385 17.274-6.02-.163-5.602-15.951-12.448-16.388-6.42-.41-7.11 14.178-13.53 13.76-3.55-.232-2.976-9.373-6.432-8.523-2.6.64.225 5.733-1.313 7.924-5.205 3.921-6.28 2.631-9.952 7.803z"
        fill="#ffe680"
    />
    <path
        d="M72.002 182.087l5.897 6.377s3.21-7.23 6.496-7.446c2.879-.189 3.636 6.123 6.493 5.722 5.909-.828 3.698-14.772 9.656-15.071 5.747-.289 5.155 12.072 10.721 13.528 4.403 1.151 9.18-2.215 12.633-5.18 2.46-2.113 1.868-7.53 5.007-8.34 3.42-.884 9.175 5.305 9.175 5.305l-2.142-13.645s-5.849-3.91-8.876-3.1c-5.162 1.305-8.685 17.188-11.386 17.274-6.02-.163-5.601-15.952-12.448-16.388-6.419-.41-7.11 14.178-13.529 13.76-3.551-.232-2.976-9.373-6.432-8.523-2.6.64.225 5.733-1.313 7.924-5.206 3.921-6.28 2.631-9.953 7.803z"
        fill="#febe14"
    />
    <path
        d="M134.118 164.9c-1.874-3.028-8.119-4.328-9.46.06-3.292 4.509-3.318 11.89-8.845 14.374-8.124-.979-6.368-11.96-11.615-15.99-4.942-1.418-4.863 5.861-7.43 8.311-1.692 3.817-7.32 7.18-10.375 2.98-1.529-1.306-1.596-4.953-2.326-5.487 1.137 3.832-.542 7.798-4.462 8.945-2.831.965-7.433 4.018-3.005 6.639 2.479 1.29 2.528-3.837 4.728-4.409 3.007-2.48 7.408-.293 8.03 3.315 1.684 2.749 3.755-.668 3.685-2.707 1.092-4.37 3.2-12.634 9.345-10.709 6.534 1.71 3.953 12.779 10.997 13.275 6.235-.571 10.986-5.52 12.107-11.482 2.328-3.512 7.324-2.206 10.058.06-.353-2.412-.741-4.834-1.433-7.175z"
        fill="#ffd42a"
    />
    <path
        d="M126.167 190.334l-8.21-15.32-9.02-6.551 7.56-8.666-3.93-8.163s21.822-13.854 14.717-12.948c-7.105.906-16.779-7.007-16.779-7.007l5.494-5.995 21.162 7.41s22.472 10.131 15.316 14.414c-7.156 4.282-17.335 7.505-17.335 7.505l1.612 5.09-8.265 10.681 7.305 8.214z"
        fill="#456f00"
    />
    <path
        d="M96.67 139.485l15.32-8.21 6.552-9.02 8.666 7.56 8.163-3.93s13.854 21.821 12.948 14.717c-.906-7.105 7.007-16.779 7.007-16.779l5.995 5.494-7.41 21.162s-10.131 22.472-14.414 15.316c-4.282-7.156-7.505-17.335-7.505-17.335l-5.09 1.612-10.681-8.265-8.215 7.305z"
        fill="#73cb2b"
    />
    <path
        d="M162.554 146.695l-8.211-15.32-9.019-6.551 7.56-8.666-3.93-8.163s21.821-13.854 14.716-12.948c-7.105.906-16.778-7.007-16.778-7.007l5.493-5.995 21.163 7.41s22.472 10.131 15.316 14.414c-7.156 4.282-17.335 7.505-17.335 7.505l1.612 5.09-8.265 10.681 7.305 8.214z"
        fill="#456f00"
    />
    <path
        d="M133.598 240.687l-37.37 3.618s-9.829-9.983-9.609-16.28c.154-4.39 7.474-10.854 7.474-10.854l20.287-4.523h25.626l-9.61 33.466z"
        fill="#f8010a"
    />
    <path
        d="M209.466 59.754l15.32-8.211 6.55-9.019 8.667 7.56 8.163-3.93s13.854 21.821 12.948 14.716c-.906-7.105 7.007-16.778 7.007-16.778l5.995 5.493-7.41 21.163s-10.131 22.472-14.414 15.316c-4.282-7.156-7.506-17.335-7.506-17.335l-5.089 1.612-10.681-8.265-8.215 7.305z"
        fill="#4e8a11"
    />
    <path
        d="M121.763 170.892l8.354 2.375s-1.023-7.845 1.67-9.74c2.36-1.66 6.292 3.335 8.523 1.505 4.614-3.783-4.533-14.537.399-17.894 4.756-3.238 10.685 7.624 16.195 5.969 4.36-1.31 6.686-6.67 8.09-11 1-3.084-2.325-7.4-.067-9.727 2.46-2.535 10.595-.246 10.595-.246l-8.931-10.536s-7.03-.294-9.194 1.974c-3.727 3.801 1.534 19.197-.727 20.676-5.225 2.995-13.087-10.703-19.16-7.512-5.694 2.992 1.31 15.807-4.388 18.791-3.153 1.651-7.42-6.453-9.929-3.927-1.887 1.9 3.177 4.777 3.004 7.449-2.403 6.058-3.992 5.516-4.435 11.843z"
        fill="#ffe680"
    />
    <path
        d="M121.03 168.866l8.355 2.375s-1.024-7.845 1.67-9.74c2.36-1.66 6.292 3.335 8.522 1.505 4.614-3.783-4.533-14.537.4-17.894 4.755-3.238 10.685 7.624 16.195 5.969 4.359-1.31 6.685-6.67 8.09-11 1-3.084-2.325-7.4-.067-9.727 2.46-2.535 10.595-.246 10.595-.246l-8.932-10.536s-7.03-.294-9.193 1.974c-3.727 3.801 1.533 19.197-.728 20.676-5.224 2.995-13.087-10.703-19.16-7.512-5.693 2.992 1.31 15.807-4.388 18.791-3.153 1.651-7.42-6.452-9.928-3.927-1.887 1.9 3.176 4.777 3.004 7.449-2.403 6.058-3.992 5.516-4.436 11.843z"
        fill="#febe14"
    />
    <path
        d="M165.117 121.854c-3.176-1.61-9.184.532-8.045 4.976-.464 5.563 3.356 11.879-.069 16.878-7.446 3.393-11.663-6.896-18.241-7.606-4.958 1.362-1.1 7.536-2.017 10.964.542 4.14-2.512 9.94-7.307 7.945-1.986-.32-3.942-3.398-4.843-3.474 2.965 2.68 3.597 6.94.847 9.96-1.914 2.298-4.255 7.3.89 7.233 2.79-.189.162-4.592 1.742-6.225 1.277-3.684 6.173-4.108 8.583-1.35 2.868 1.47 2.857-2.526 1.736-4.23-1.342-4.3-3.845-12.453 2.404-14.009 6.469-1.942 10.028 8.853 16.3 5.61 5.026-3.734 6.506-10.433 4.36-16.106.159-4.21 5.104-5.696 8.618-5.186-1.557-1.875-3.149-3.74-4.958-5.38z"
        fill="#ffd42a"
    />
    <path
        d="M136.032 114.03l6.618 5.626s2.32-7.563 5.558-8.17c2.835-.532 4.343 5.643 7.131 4.903 5.767-1.53 1.902-15.109 7.782-16.12 5.67-.973 6.563 11.37 12.264 12.148 4.509.616 8.849-3.298 11.922-6.656 2.189-2.392.952-7.698 3.972-8.88 3.29-1.286 9.743 4.17 9.743 4.17l-3.76-13.291s-6.274-3.182-9.183-2.016c-4.968 1.914-6.564 18.106-9.235 18.514-5.996.559-7.472-15.166-14.32-14.78-6.423.362-5.362 14.928-11.785 15.28-3.554.196-4.077-8.948-7.407-7.69-2.504.947.91 5.665-.354 8.025-4.699 4.516-5.92 3.364-8.947 8.937z"
        fill="#ffe680"
    />
    <path
        d="M136.205 111.884l6.618 5.625s2.321-7.563 5.559-8.17c2.835-.533 4.342 5.642 7.13 4.903 5.768-1.53 1.903-15.11 7.783-16.12 5.67-.974 6.562 11.369 12.263 12.147 4.51.616 8.85-3.298 11.922-6.655 2.19-2.392.953-7.698 3.973-8.88 3.29-1.287 9.743 4.17 9.743 4.17l-3.76-13.291s-6.275-3.182-9.184-2.016c-4.968 1.914-6.564 18.105-9.235 18.514-5.996.559-7.471-15.166-14.32-14.78-6.422.362-5.362 14.927-11.785 15.28-3.553.196-4.077-8.948-7.406-7.69-2.505.946.91 5.665-.355 8.024-4.698 4.516-5.92 3.364-8.946 8.938z"
        fill="#febe14"
    />
    <path
        d="M195.816 87.382c-2.223-2.781-8.578-3.324-9.384 1.193-2.729 4.87-1.871 12.201-7.06 15.33-8.184 0-7.755-11.111-13.446-14.485-5.077-.816-4.127 6.402-6.382 9.141-1.223 3.992-6.407 8.004-9.943 4.2-1.675-1.113-2.178-4.726-2.967-5.168 1.587 3.668.396 7.806-3.359 9.415-2.695 1.297-6.898 4.878-2.188 6.95 2.616.985 2.05-4.11 4.166-4.943 2.689-2.822 7.32-1.178 8.37 2.33 2 2.527 3.647-1.113 3.334-3.129.56-4.47 1.664-12.926 7.995-11.75 6.692.914 5.455 12.213 12.507 11.863 6.122-1.314 10.246-6.797 10.646-12.85 1.89-3.765 7.006-3.067 9.992-1.145-.64-2.352-1.315-4.71-2.281-6.952z"
        fill="#ffd42a"
    />
    <path
        d="M63.95 382.29s17.688 21.02 30.2 23.406c7.98 1.52 18.39-.404 23.404-6.795 29.387-37.455-1.523-95.691 6.04-142.69 7.316-45.462 12.242-94.544 37.75-132.874 25.218-37.899 63.12-72.201 106.757-85.164 35.286-10.482 76.074-3.893 109.926 10.57 29.338 12.535 55.193 35.697 72.478 62.515 9.665 14.993 14.458 33.513 15.1 51.34.427 11.838 2.48 28.425-7.55 34.73-112.43 70.665-218.038 129.117-323.887 198.56-12.258 8.042-32.888 20.086-47.942 12.835-9.9-4.768-22.272-26.425-22.272-26.425z"
        fill="#f1ca00"
    />
    <path
        d="M308.28 48.294c-.23-.013-.466.01-.719.063-4.684.074-5.808 5.357-4.594 8.906-.665 2.347-5.499 3.972-2.03 6.312.802-.257-.054-4.872 2.874-4.094 2.08.345 5.142 4.994 5.344.594-.212-2.911-6.015-.232-5.719-4.125-.568-3.221 3.861-7.197 6.156-3.594 1.204 3.32 2.93 1.19 1.813-.968-.46-1.434-1.514-3.006-3.125-3.094zM210.655 51.2c-.202.014-.4.036-.594.063-4.36.36-5.431 5.327-4.125 8.718-.978 2.146-5.685 4.907-1.656 6.563-1.205-2.967 2.122-5.748 4.375-3.25 1.428 2.797 4.182 1.464 3.281-1.156-1.733-1.203-6.054-.226-5.625-3.781-.264-3.743 5.018-6.674 6.781-2.375 2.522 3.264 1.482-4.185-.687-4.438-.514-.34-1.143-.386-1.75-.344zm-67.188 10.625a9.864 9.864 0 00-.625.063c-4.361.36-5.432 5.327-4.125 8.718-.978 2.146-5.685 4.907-1.656 6.563-1.205-2.967 2.122-5.748 4.375-3.25 1.428 2.797 4.182 1.464 3.281-1.156-1.734-1.203-6.055-.226-5.625-3.781-.264-3.743 5.018-6.674 6.781-2.375 2.522 3.264 1.482-4.185-.687-4.438-.514-.34-1.112-.386-1.72-.344zm189.22 21.22c-.202.013-.4.035-.594.062-4.36.36-5.431 5.327-4.125 8.718-.978 2.146-5.685 4.907-1.656 6.563-1.205-2.967 2.122-5.748 4.375-3.25 1.428 2.797 4.182 1.464 3.281-1.156-1.733-1.203-6.054-.226-5.625-3.781-.264-3.743 5.018-6.674 6.781-2.375 2.522 3.264 1.482-4.185-.687-4.438-.514-.34-1.143-.386-1.75-.344zm-91.094 4.405c-.202.014-.4.068-.594.094-4.36.36-5.431 5.328-4.125 8.719-.978 2.146-5.685 4.906-1.656 6.562-1.205-2.967 2.122-5.748 4.375-3.25 1.428 2.797 4.182 1.464 3.281-1.156-1.733-1.203-6.054-.225-5.625-3.781-.264-3.743 5.018-6.674 6.781-2.375 2.522 3.264 1.482-4.185-.687-4.437-.514-.34-1.143-.418-1.75-.375zm26.125 9.875c-1.455.024-3.017.611-4.125 1.407-1.53 1.098-2.215 3.253-2.438 5.125-.124 1.05.882 2.06.657 3.093-.406 1.86-3.509 2.696-3.375 4.594.103 1.471 1.662 3.542 3.094 3.188 1.39-.345-.075-3.509 1.218-4.125 1.885-.9 3.918 3.318 5.782 2.375 1.343-.68 1.791-3.04 1.093-4.375-.865-1.656-4.565-.263-5.25-2-.639-1.622.63-4.263 2.313-4.72 1.88-.509 3.227 4.338 4.844 3.25 2.02-1.359.534-5.727-1.438-7.155-.663-.48-1.502-.67-2.375-.657zm-67.156 15.562c-5.826-.005-6.753 8.43-3.125 11.22.496 3.194 6.91 2.68 3.875-.563-3.684.068-7.131-3.522-3.906-6.688 2.196-2.785 5.788.143 6.844 1.657 1.076-2.334-1.064-5.828-3.688-5.625zm-42.969 1.094c-.202.014-.4.036-.594.063-4.36.36-5.431 5.327-4.125 8.718-.978 2.146-5.685 4.907-1.656 6.563-1.205-2.967 2.122-5.748 4.375-3.25 1.428 2.797 4.182 1.464 3.281-1.156-1.733-1.203-6.054-.226-5.625-3.781-.264-3.744 5.018-6.674 6.781-2.375 2.522 3.264 1.482-4.185-.687-4.438-.514-.34-1.143-.386-1.75-.344zm160.72 2.594c-1.455.023-3.017.642-4.125 1.437-1.53 1.1-2.215 3.223-2.438 5.094-.124 1.05.882 2.092.657 3.125-.406 1.86-3.509 2.695-3.375 4.594.103 1.472 1.662 3.511 3.094 3.156 1.39-.344-.075-3.508 1.218-4.125 1.885-.898 3.918 3.35 5.782 2.407 1.343-.68 1.791-3.072 1.093-4.407-.865-1.655-4.565-.262-5.25-2-.639-1.621.63-4.231 2.313-4.687 1.88-.51 3.227 4.337 4.844 3.25 2.02-1.36.534-5.728-1.438-7.156-.663-.48-1.502-.702-2.375-.688zm-124.06 6.781c-2.13.616-1.954 6.036.125 4.375.209-1.34-.058-3.454-.125-4.375zm68.25 10.438c-1.455.024-3.017.611-4.125 1.406-1.53 1.1-2.184 3.254-2.406 5.125-.125 1.05.85 2.06.625 3.094-.406 1.86-3.509 2.695-3.375 4.594.103 1.471 1.662 3.542 3.094 3.187 1.39-.344-.075-3.508 1.218-4.125 1.885-.898 3.918 3.319 5.782 2.375 1.343-.68 1.791-3.04 1.093-4.375-.865-1.655-4.565-.262-5.25-2-.639-1.62.63-4.262 2.313-4.718 1.88-.51 3.258 4.337 4.875 3.25 2.02-1.36.503-5.728-1.469-7.157-.663-.48-1.502-.67-2.375-.656zm-147.34 5.844c-.202.014-.4.036-.594.062-4.36.36-5.431 5.328-4.125 8.72-.978 2.145-5.685 4.905-1.656 6.562-1.205-2.967 2.122-5.748 4.375-3.25 1.428 2.796 4.182 1.463 3.281-1.156-1.733-1.204-6.054-.226-5.625-3.782-.264-3.743 5.018-6.673 6.781-2.375 2.522 3.265 1.482-4.184-.687-4.437-.514-.34-1.143-.386-1.75-.344zm226.38 0c-.202.014-.4.036-.594.062-4.36.36-5.431 5.328-4.125 8.72-.978 2.145-5.685 4.905-1.656 6.562-1.205-2.967 2.122-5.748 4.375-3.25 1.428 2.796 4.182 1.463 3.281-1.156-1.733-1.204-6.054-.226-5.625-3.782-.264-3.743 5.018-6.673 6.781-2.375 2.522 3.265 1.482-4.184-.687-4.437-.514-.34-1.143-.386-1.75-.344zm-138.91 10.375a4.61 4.61 0 00-.625.031c-4.506.088-5.999 5.188-4.531 8.75-.516 2.46-5.515 3.912-2.219 6.406 1.367.414-.288-4.224 2.344-4.03 2.483-.399 5.875 5.416 5.969.374-.745-2.428-6.889-.377-5.657-4.812.008-3.642 5.076-5.96 6.72-1.938 2.395 3.306 1.572-3.714-.282-4.156-.469-.438-1.09-.608-1.719-.625zm90.25 5.531c-.202.014-.4.036-.594.063-4.36.36-5.431 5.327-4.125 8.718-.978 2.146-5.685 4.907-1.656 6.563-1.205-2.967 2.122-5.748 4.375-3.25 1.428 2.797 4.182 1.464 3.281-1.156-1.733-1.203-6.054-.226-5.625-3.781-.264-3.744 5.018-6.674 6.781-2.375 2.522 3.264 1.482-4.185-.687-4.438-.514-.34-1.143-.386-1.75-.344zm-188.16 23.688c-4.281 2.125 1.168 4.335 1.688 6.844-1.567 3.54.159 8.504 4.593 8.562.977.119 1.978-.134 2.594-.937 1.584-.788 2.238-6.992-.031-3.844-1.403 3.536-6.039 2.275-6.563-1.125-1.477-3.623 2.619-4.765 5.25-4.75 1.31-2.602-1.584-4.476-3.125-1.437-2.34 2.49-5.56-.328-4.406-3.313zm105.56 2.406c-1.455.024-3.048.611-4.156 1.407-1.531 1.098-2.184 3.254-2.406 5.125-.125 1.05.881 2.06.656 3.093-.406 1.86-3.54 2.696-3.406 4.594.103 1.471 1.662 3.511 3.093 3.156 1.391-.344-.074-3.508 1.22-4.125 1.884-.898 3.949 3.35 5.812 2.407 1.343-.68 1.76-3.04 1.062-4.375-.865-1.656-4.534-.263-5.219-2-.639-1.622.6-4.263 2.282-4.72 1.88-.509 3.258 4.338 4.875 3.25 2.02-1.359.503-5.727-1.47-7.155-.662-.48-1.47-.67-2.343-.657zm-64.25 1.938c-.873-.014-1.712.207-2.375.687-1.972 1.43-3.458 5.797-1.437 7.157 1.616 1.087 2.963-3.76 4.843-3.25 1.683.455 2.952 3.066 2.313 4.687-.685 1.738-4.385.345-5.25 2-.698 1.335-.25 3.726 1.094 4.406 1.863.944 3.896-3.305 5.78-2.406 1.294.617-.171 3.78 1.22 4.125 1.431.355 2.99-1.685 3.093-3.156.134-1.899-2.969-2.734-3.375-4.594-.225-1.033.781-2.075.657-3.125-.223-1.871-.907-3.995-2.438-5.094-1.108-.795-2.67-1.414-4.125-1.437zm124.62 3.344c-1.455.023-3.017.61-4.125 1.406-1.53 1.099-2.215 3.254-2.438 5.125-.124 1.05.882 2.06.657 3.094-.406 1.86-3.509 2.695-3.375 4.593.103 1.472 1.662 3.511 3.094 3.157 1.39-.345-.075-3.509 1.218-4.125 1.885-.9 3.918 3.35 5.782 2.406 1.343-.68 1.791-3.04 1.093-4.375-.865-1.655-4.565-.262-5.25-2-.639-1.622.63-4.263 2.313-4.719 1.88-.51 3.227 4.338 4.844 3.25 2.02-1.36.534-5.727-1.438-7.156-.663-.48-1.502-.67-2.375-.656zm-60 28.75c-.202.014-.4.036-.594.062-4.36.36-5.431 5.328-4.125 8.719-.978 2.146-5.685 4.906-1.656 6.562-1.205-2.967 2.122-5.748 4.375-3.25 1.428 2.797 4.182 1.464 3.281-1.156-1.733-1.203-6.054-.225-5.625-3.78-.264-3.744 5.018-6.675 6.781-2.376 2.522 3.264 1.482-4.185-.687-4.437-.514-.34-1.143-.386-1.75-.344zm-109.66 2.656c-.202.014-.4.036-.594.062-4.36.36-5.431 5.328-4.125 8.72-.978 2.145-5.685 4.905-1.656 6.562-1.205-2.968 2.122-5.749 4.375-3.25 1.428 2.796 4.182 1.463 3.281-1.157-1.733-1.203-6.054-.225-5.625-3.78-.264-3.744 5.018-6.674 6.782-2.376 2.522 3.265 1.481-4.184-.688-4.437-.514-.34-1.143-.386-1.75-.344zm56.469 20.125c-1.455.023-3.017.61-4.125 1.406-1.53 1.099-2.215 3.254-2.437 5.125-.125 1.05.881 2.06.656 3.094-.406 1.86-3.509 2.695-3.375 4.594.103 1.471 1.662 3.542 3.094 3.187 1.39-.344-.075-3.508 1.218-4.125 1.885-.899 3.918 3.319 5.782 2.375 1.343-.68 1.791-3.04 1.093-4.375-.865-1.655-4.565-.262-5.25-2-.639-1.621.63-4.232 2.313-4.687 1.88-.51 3.227 4.306 4.844 3.218 2.02-1.359.534-5.727-1.438-7.156-.663-.48-1.502-.67-2.375-.656zm-49.375 23.219c-.202.014-.4.036-.594.062-4.36.36-5.431 5.328-4.125 8.72-.978 2.145-5.685 4.905-1.656 6.562-1.205-2.968 2.122-5.749 4.375-3.25 1.428 2.796 4.182 1.463 3.281-1.157-1.733-1.203-6.054-.225-5.625-3.78-.264-3.744 5.018-6.674 6.781-2.376 2.522 3.265 1.482-4.184-.687-4.437-.514-.34-1.143-.386-1.75-.344z"
        fill="url(#e)"
        transform="translate(24.066 22.516) scale(1.2075)"
    />
    <path
        d="M74.65 322.387c-1.723 1.474-.932 4.943.378 6.795.945 1.335 2.894 1.887 4.53 1.887s3.575-.56 4.53-1.887c1.031-1.434.925-3.606.377-5.285-.664-2.038-2.111-5.56-4.152-4.908-1.443.462.84 3.627-.378 4.53-1.446 1.074-3.915-2.303-5.284-1.132zM88.618 280.112c-1.724 1.474-.933 4.943.377 6.795.945 1.335 2.934 2.247 4.53 1.887 1.652-.372 1.999-2.82 3.398-3.775 1.776-1.21 5.623-.155 6.04-2.265.465-2.358-2.881-4.888-5.285-4.907-1.693-.013-2.895.696-3.775 3.397-.559 1.713-3.916-2.303-5.285-1.132zM91.638 353.347c-1.724 1.474-.933 4.943.377 6.795.945 1.335 2.934 2.247 4.53 1.887 1.652-.372 1.999-2.821 3.398-3.775 1.776-1.21 5.623-.155 6.04-2.265.465-2.358-2.882-4.888-5.286-4.907-1.692-.013-2.894.696-3.775 3.397-.558 1.713-3.915-2.303-5.285-1.132zM84.465 391.093c-1.724 1.475-.933 4.943.378 6.795.944 1.336 2.934 2.247 4.53 1.888 1.651-.372 1.998-2.822 3.397-3.775 1.777-1.211 5.624-.156 6.04-2.265.465-2.359-2.881-4.889-5.285-4.908-1.693-.013-2.894.696-3.775 3.398-.558 1.713-3.916-2.304-5.285-1.133zM104.472 241.98c-1.724 1.474-.932 4.942.378 6.794.945 1.335 2.934 2.247 4.53 1.888 1.651-.373 1.998-2.822 3.397-3.775 1.777-1.212 5.624-.156 6.04-2.265.465-2.359-2.881-4.89-5.285-4.908-1.693-.013-2.894.696-3.775 3.398-.558 1.713-3.916-2.304-5.285-1.133z"
        fill="#a05e00"
    />
    <path
        d="M235.47 11.719c-9.708.184-19.274 1.537-28.406 4.25-36.14 10.735-67.52 39.145-88.4 70.531-21.128 31.75-25.227 72.38-31.285 110.03-6.264 38.925 19.337 87.169-5 118.19-4.927 4.867-10.445 6.679-16.618 10.302 8.426-1.42 24.998-9.28 30.368-12.8 87.665-57.51 175.14-105.95 268.26-164.47 8.307-5.22 6.603-18.945 6.25-28.75-.532-14.763-4.496-30.115-12.5-42.531-14.315-22.208-35.734-41.369-60.031-51.75-19.273-8.235-41.268-13.405-62.625-13z"
        fill="url(#f)"
        transform="translate(24.066 22.516) scale(1.2075)"
    />
    <path
        d="M100.478 353.516c-1.304 2.507-4.555 5.723-7.132 2.453-1.312 1.508 2.55 5.783 3.736 2.113 1.022-2.57 4.316-3.365 6.264-3.057-.74-.76-1.77-1.61-2.868-1.51zM82.1 324.62c-1.298 2.341-5.197.894-5.999 1.246.461 4.216 8.216 3.88 6-1.246zm-2.376 4.151c-.052.07.125.04 0 0z"
        fill="#d38d5f"
    />
    <path
        d="M115.355 315.142c-2.3-.296-5.619 1.43-5.872 3.737-.247 2.251 5.061 2.554 4.805 4.804-.19 1.668-4.47 1.003-4.271 2.67.332 2.793 5.346 3.582 8.008 2.669 2.427-.833 4.476-3.848 4.27-6.406-.272-3.39-3.568-7.041-6.94-7.474z"
        fill="#deaa87"
    />
    <path
        d="M39.92 222.732h18.875l14.345 3.925 5.285 6.644s3.643-.188 4.53-1.51c2.109-3.14 1.764-8.502-.755-11.324-3.748-4.198-16.61-3.02-16.61-3.02z"
        fill="#4c6e00"
    />
    <path
        d="M66.775 206.237l11.745-12.813 3.203-10.677 10.677 4.271 6.407-6.406s20.287 16.016 17.083 9.61c-3.203-6.407 1.068-18.152 1.068-18.152l7.474 3.203v22.422s-2.135 24.557-8.541 19.219c-6.407-5.339-12.813-13.88-12.813-13.88l-4.271 3.203-12.813-4.271-5.339 9.61z"
        fill="#73cb2b"
    />
    <path
        d="M98.968 187.074c-2.708 2.036-5.9 6.978-9.697 3.472-2.174-1.963-6.711-2.122-5.623 1.849-.493 5.359-5.466 8.609-8.943 12.112 1.828 1.62 4.099 2.257 4.151-.792 2.218-5.52 9.97-8.13 14.302-3.66 5.8.17 13.91-2.895 17.097 4.002 2.12 1.801 4.506 7.034 6.676 6.45 1.933-4.917 3.103-12.3 2.641-16.226-5.387 5.192-12.752-1.3-16.867-5.321-1.138-.67-2.245-2.163-3.736-1.887z"
        opacity=".364"
        fill="#d5ffd5"
    />
    <path
        d="M82.062 160.41c-8.437.743-18.227.304-25.125 5.813-2.994 3.165-2.003 7.78.844 10.593 1.453 3.187 4.962 4.964 8.151 3.247 7.013-.69 14.025-1.37 21.037-2.06L92 160.443c-3.312-.063-6.625-.09-9.937-.031z"
        opacity=".325"
        fill="url(#d)"
        transform="translate(24.066 22.516) scale(1.2075)"
    />`,
      }}
    ></svg>
  )
}
