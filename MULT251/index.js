function checkPaymentMethod() {
    const gatewaySelect = document.querySelector('.js-enhanced-select.pos__field-select');

    if (gatewaySelect) {
        const selectedOption = gatewaySelect.options[gatewaySelect.selectedIndex];
        const dataConfigId = selectedOption.getAttribute('data-config-id');

        if (dataConfigId) {
            const configId = parseInt(dataConfigId);
            console.log("se encontro", configId);

            return configId;
        }
    }

    return null;
}

const ButtonsPaymentMp = () => {
    const [configIdFromCheck, setConfigIdFromCheck] = React.useState(null);

    React.useEffect(() => {
        const configId = checkPaymentMethod();
        setConfigIdFromCheck(configId);
    }, []);

    return (
        <>
            {configIdFromCheck === 13 ? (
                <>
                    <li className="booking-payment__options-pos on">
                        <input type="radio" name="paymentType" value="pos" className="js-paymentType hidden" />
                        <span className="icoSvgMp" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_2934_133)">
                                    <path d="M24 11.5437C24 7.21983 18.6277 3.69531 12.0004 3.69531C5.37362 3.69531 0.0014768 7.21983 0.0014768 11.5437C0.0014768 11.6554 0 11.9642 0 12.0032C0 16.5901 4.69577 20.3054 11.999 20.3054C19.3475 20.3054 23.9999 16.5913 23.9999 12.0041V11.5437" fill="#2A3C8E" />
                                    <path d="M23.5407 11.5377C23.5407 15.614 18.3752 18.9185 12.0028 18.9185C5.63072 18.9185 0.465332 15.614 0.465332 11.5376C0.465332 7.46088 5.63072 4.15625 12.0028 4.15625C18.3752 4.15625 23.5407 7.46102 23.5407 11.5377Z" fill="#00ADEF" />
                                    <path d="M8.17174 9.21009C8.16569 9.22175 8.05065 9.34078 8.12508 9.43663C8.30716 9.66908 8.86938 9.80258 9.43824 9.67498C9.77687 9.59893 10.2109 9.25365 10.6313 8.92004C11.0869 8.55793 11.539 8.19568 11.9934 8.05139C12.4745 7.89825 12.7829 7.96397 12.9865 8.02555C13.21 8.0923 13.4727 8.23939 13.8918 8.5538C14.6813 9.14747 17.8557 11.9181 18.4042 12.3972C18.846 12.1978 20.8093 11.3523 23.4771 10.7644C23.2452 9.34226 22.3801 8.04091 21.068 6.9754C19.2393 7.74363 17.0045 8.14428 14.8189 7.07686C14.8079 7.07243 13.625 6.51257 12.4584 6.54004C10.7242 6.58021 9.97329 7.33086 9.17818 8.12523L8.17174 9.21009Z" fill="white" />
                                    <path d="M18.2756 12.6975C18.2385 12.6642 14.5431 9.43079 13.7059 8.80167C13.2215 8.43838 12.9519 8.34564 12.6692 8.30946C12.5217 8.29026 12.3182 8.31773 12.176 8.35672C11.7865 8.46275 11.2775 8.80315 10.8253 9.16157C10.3571 9.53446 9.91558 9.88564 9.50636 9.9772C8.98298 10.0946 8.34412 9.95609 8.05245 9.75908C7.93431 9.67978 7.85116 9.58777 7.81129 9.49444C7.70348 9.24486 7.90226 9.0452 7.9349 9.01153L8.95462 7.90866C9.07321 7.79036 9.19254 7.67193 9.31467 7.55541C8.98564 7.59823 8.68142 7.68241 8.38532 7.76467C8.01597 7.86864 7.66051 7.96743 7.30106 7.96714C7.15101 7.96714 6.3466 7.83541 6.19405 7.79376C5.27135 7.54123 4.46133 7.29549 3.25139 6.73047C1.80162 7.80971 0.832394 9.15921 0.552246 10.6455C0.760474 10.7005 1.096 10.8005 1.23718 10.8318C4.51774 11.5611 5.53953 12.3128 5.72517 12.4696C5.82735 12.3549 5.95262 12.2632 6.09275 12.2003C6.23288 12.1374 6.38471 12.1049 6.53829 12.1048C6.90129 12.1054 7.2284 12.2877 7.42732 12.5696C7.61502 12.4213 7.8742 12.2946 8.20914 12.2947C8.36125 12.2947 8.51927 12.3228 8.67846 12.377C9.04855 12.504 9.23965 12.7503 9.33859 12.9733C9.48212 12.9086 9.63792 12.8756 9.79537 12.8766C9.97184 12.8766 10.1557 12.9168 10.3409 12.9968C10.9458 13.2564 11.04 13.8505 10.9849 14.2985C11.028 14.2934 11.0715 14.2914 11.1155 14.2914C11.8326 14.2918 12.4161 14.8747 12.4156 15.5924C12.4157 15.8069 12.3622 16.0179 12.2601 16.2065C12.4554 16.3162 12.9528 16.5645 13.3894 16.5089C13.7384 16.4651 13.8709 16.3459 13.9184 16.2787C13.9509 16.2326 13.9853 16.1787 13.9533 16.1402L13.0276 15.1116C13.0276 15.1116 12.8752 14.9674 12.9254 14.9119C12.9779 14.8549 13.0719 14.9369 13.1384 14.9925C13.6096 15.386 14.185 15.9796 14.185 15.9796C14.1946 15.986 14.2327 16.0615 14.4455 16.0996C14.6286 16.1323 14.9525 16.1131 15.177 15.9288C15.2361 15.8797 15.2899 15.8246 15.3376 15.7643C15.3341 15.7673 15.3308 15.7713 15.3273 15.7726C15.564 15.4699 15.301 15.1631 15.301 15.1631L14.2203 13.9495C14.2203 13.9495 14.0658 13.8067 14.1182 13.7491C14.1655 13.6992 14.2647 13.7746 14.3325 13.8308C14.6747 14.1168 15.1581 14.6021 15.6216 15.0559C15.712 15.1222 16.1193 15.3742 16.6585 15.0199C16.9856 14.8053 17.0513 14.5417 17.0422 14.3426C17.0193 14.0793 16.814 13.8917 16.814 13.8917L15.3375 12.4076C15.3375 12.4076 15.1818 12.2744 15.2368 12.207C15.282 12.1505 15.3831 12.232 15.4494 12.2875C15.9199 12.6811 17.1928 13.8482 17.1928 13.8482C17.2109 13.861 17.6509 14.1743 18.1943 13.8281C18.3887 13.7039 18.5129 13.5165 18.5237 13.2991C18.5421 12.9213 18.2756 12.6975 18.2756 12.6975Z" fill="white" />
                                    <path d="M11.1151 14.5805C10.8862 14.578 10.6359 14.7137 10.6031 14.6941C10.5851 14.6819 10.6172 14.5899 10.6386 14.5369C10.6604 14.4843 10.962 13.5773 10.2273 13.2623C9.66494 13.0205 9.32114 13.2924 9.20314 13.4151C9.17213 13.4473 9.15825 13.4447 9.15456 13.4038C9.14333 13.2404 9.07023 12.7986 8.58496 12.6506C7.8913 12.4382 7.44531 12.9223 7.33219 13.097C7.28154 12.7017 6.94734 12.3948 6.53797 12.3945C6.32442 12.3943 6.11953 12.479 5.96837 12.6298C5.81722 12.7807 5.73217 12.9854 5.73193 13.1989C5.73191 13.3047 5.75272 13.4094 5.79317 13.507C5.83361 13.6047 5.89291 13.6935 5.96766 13.7683C6.04241 13.843 6.13116 13.9023 6.22884 13.9428C6.32652 13.9833 6.43121 14.0041 6.53694 14.0041C6.74462 14.0044 6.94428 13.9239 7.09369 13.7796C7.09812 13.7835 7.10019 13.7914 7.09767 13.8068C7.064 14.0057 7.00139 14.7295 7.75928 15.024C8.06306 15.142 8.3215 15.0542 8.53563 14.9039C8.59943 14.859 8.61006 14.8779 8.60091 14.9379C8.57358 15.1239 8.60814 15.5225 9.16681 15.7489C9.59183 15.9217 9.84333 15.7451 10.0081 15.5927C10.0798 15.5273 10.0994 15.5377 10.1031 15.6389C10.1233 16.1775 10.5708 16.605 11.1138 16.6055C11.2468 16.6057 11.3785 16.5798 11.5015 16.529C11.6244 16.4783 11.7362 16.4039 11.8303 16.31C11.9245 16.216 11.9992 16.1045 12.0502 15.9816C12.1012 15.8588 12.1274 15.7271 12.1275 15.5942C12.1279 15.0342 11.675 14.5867 11.1151 14.5805Z" fill="white" />
                                    <path d="M11.1151 16.5335C10.608 16.5331 10.1955 16.1389 10.1768 15.6365C10.1753 15.5937 10.1712 15.4791 10.0743 15.4791C10.0344 15.4791 9.99987 15.503 9.96014 15.5389C9.84865 15.6423 9.70643 15.7474 9.49909 15.7474C9.40502 15.7474 9.30282 15.7254 9.19516 15.6816C8.65953 15.4645 8.652 15.0966 8.67386 14.9486C8.67976 14.9092 8.68183 14.868 8.65466 14.8363L8.62158 14.8067H8.5882C8.56103 14.8067 8.53312 14.8178 8.49516 14.8445C8.3401 14.9535 8.19153 15.0062 8.04031 15.0062C7.95335 15.0055 7.86728 14.9887 7.78645 14.9566C7.08128 14.6821 7.1371 14.0166 7.17151 13.8162C7.17653 13.7756 7.16649 13.7442 7.14065 13.7232L7.09088 13.6821L7.04421 13.7267C6.90864 13.8584 6.72707 13.9319 6.53811 13.9317C6.3439 13.9315 6.15771 13.8543 6.02038 13.717C5.88305 13.5796 5.80582 13.3934 5.80562 13.1992C5.80598 13.005 5.88343 12.8188 6.02097 12.6816C6.15851 12.5444 6.34489 12.4675 6.53915 12.4676C6.90406 12.4676 7.21493 12.7422 7.2613 13.1066L7.2867 13.3034L7.39466 13.1369C7.40676 13.1176 7.70271 12.67 8.24677 12.6705C8.35461 12.6711 8.46175 12.688 8.56457 12.7205C8.99846 12.8528 9.07185 13.2462 9.08322 13.4098C9.0909 13.5055 9.15884 13.51 9.17213 13.51C9.20964 13.51 9.23711 13.486 9.25675 13.4657C9.32641 13.3931 9.41014 13.3355 9.50282 13.2964C9.5955 13.2573 9.69519 13.2375 9.79578 13.2382C9.92352 13.2387 10.0594 13.2689 10.1997 13.3292C10.889 13.6248 10.5763 14.5007 10.5727 14.5099C10.5134 14.6552 10.511 14.7193 10.5667 14.7562L10.594 14.7692H10.6139C10.6449 14.7692 10.6836 14.7558 10.7474 14.7342C10.8413 14.7017 10.983 14.653 11.1151 14.6533H11.1156C11.6345 14.6589 12.0566 15.0813 12.0563 15.5943C12.056 16.1127 11.6338 16.5335 11.1151 16.5335ZM18.4183 12.312C17.2802 11.3185 14.6494 9.03142 13.9367 8.49668C13.5299 8.19054 13.2522 8.02868 13.0083 7.95617C12.8607 7.90973 12.7069 7.88583 12.5522 7.88528C12.3712 7.88528 12.1765 7.91792 11.9733 7.9826C11.5127 8.12836 11.0542 8.49298 10.6102 8.84564L10.5873 8.86366C10.1741 9.19225 9.74704 9.53206 9.42362 9.60442C9.2822 9.63632 9.13768 9.65247 8.9927 9.65256C8.63059 9.65212 8.30525 9.54742 8.18341 9.39206C8.16333 9.36636 8.17618 9.32472 8.22329 9.26461L8.22964 9.25693L9.2309 8.17754C10.0151 7.39336 10.7561 6.65275 12.4614 6.61361C12.4895 6.61302 12.5183 6.61258 12.5463 6.61258C13.6078 6.61302 14.6691 7.0884 14.7881 7.14334C15.7834 7.62891 16.8104 7.87554 17.8433 7.87627C18.9197 7.87672 20.03 7.6103 21.1974 7.07275C21.0652 6.96193 20.93 6.85482 20.7919 6.75155C19.7662 7.19636 18.789 7.42083 17.8462 7.42053C16.8834 7.41965 15.9211 7.18853 14.9872 6.73264C14.9377 6.70916 13.7661 6.15669 12.5469 6.15625C12.5151 6.15625 12.4827 6.15669 12.4509 6.15714C11.0184 6.19066 10.2116 6.69942 9.66892 7.14511C9.14126 7.15781 8.68597 7.28511 8.28088 7.39824C7.91951 7.49866 7.60731 7.58579 7.30295 7.58579C7.17742 7.58579 6.95162 7.57397 6.93138 7.57338C6.58138 7.5629 4.8175 7.13034 3.41425 6.59885C3.27299 6.69928 3.13456 6.80363 2.99912 6.91178C4.46484 7.51283 6.24866 7.97758 6.81162 8.01391C6.96816 8.02425 7.13518 8.04197 7.30221 8.04227C7.67451 8.04227 8.04622 7.93786 8.40596 7.83729C8.61833 7.77748 8.8527 7.71264 9.09947 7.66539C9.0336 7.73007 8.96789 7.79535 8.90202 7.86151L7.88451 8.96201C7.80447 9.04294 7.6305 9.2587 7.74525 9.52438C7.79088 9.63174 7.88333 9.73408 8.01284 9.82121C8.25504 9.9847 8.68936 10.095 9.09268 10.0953C9.2375 10.0962 9.38197 10.081 9.52346 10.0501C9.94981 9.95457 10.3973 9.59822 10.8712 9.22134C11.2489 8.9214 11.7853 8.54054 12.1959 8.4286C12.3164 8.3965 12.4404 8.37949 12.5651 8.37794C12.599 8.37824 12.6309 8.37883 12.6606 8.38341C12.932 8.41782 13.1945 8.51011 13.6629 8.86189C14.4979 9.48908 18.1937 12.7222 18.2298 12.7541C18.2323 12.7562 18.468 12.9594 18.4517 13.2976C18.4429 13.4857 18.3382 13.6532 18.1565 13.7693C17.9986 13.8693 17.8359 13.9204 17.6712 13.9204C17.4243 13.9199 17.2542 13.8041 17.2431 13.7963C17.2294 13.7851 15.9633 12.624 15.4975 12.234C15.4233 12.1727 15.3512 12.1173 15.2782 12.1173C15.2597 12.117 15.2414 12.1209 15.2246 12.1288C15.2079 12.1367 15.1932 12.1483 15.1817 12.1628C15.1081 12.2532 15.1902 12.3781 15.2871 12.4607L16.7663 13.9472C16.7682 13.9487 16.9504 14.1197 16.9703 14.3479C16.9822 14.5942 16.8642 14.8005 16.6193 14.9611C16.4448 15.0759 16.268 15.1344 16.095 15.1344C15.9448 15.1343 15.798 15.0897 15.673 15.0064L15.4609 14.7971C15.0733 14.4157 14.6727 14.0212 14.3798 13.7767C14.3083 13.7171 14.2318 13.6624 14.1593 13.6624C14.1419 13.6621 14.1246 13.6655 14.1086 13.6723C14.0926 13.6791 14.0782 13.6891 14.0662 13.7018C14.0327 13.739 14.0092 13.8058 14.0927 13.9167C14.1271 13.9621 14.1672 13.9998 14.1672 13.9998L15.2468 15.2123C15.2556 15.2229 15.4692 15.4766 15.271 15.7294L15.233 15.7779C15.2016 15.8122 15.1681 15.8445 15.1326 15.8746C14.9485 16.0257 14.7024 16.0419 14.6051 16.0419C14.5531 16.0419 14.5028 16.037 14.4592 16.0294C14.3529 16.0102 14.2812 15.9806 14.2465 15.9397L14.2335 15.9261C14.1745 15.865 13.6304 15.3097 13.1803 14.9337C13.1209 14.8841 13.0469 14.8215 12.9704 14.8215C12.952 14.8213 12.9338 14.8252 12.917 14.8327C12.9002 14.8402 12.8851 14.8512 12.873 14.8651C12.7839 14.9625 12.9174 15.1084 12.9741 15.162L13.8949 16.1772C13.8939 16.1861 13.8822 16.2072 13.8599 16.2392C13.8271 16.2847 13.7152 16.3965 13.3814 16.4383C13.3413 16.4438 13.3001 16.4457 13.2593 16.4457C12.9148 16.4457 12.5475 16.2788 12.3583 16.1784C12.4444 15.9959 12.489 15.7966 12.489 15.5949C12.4893 14.8372 11.8741 14.2207 11.1165 14.2201C11.0999 14.2202 11.0834 14.2205 11.0669 14.2212C11.0917 13.8753 11.0426 13.2202 10.3704 12.9319C10.1769 12.8482 9.98377 12.8055 9.79622 12.8055C9.64943 12.8055 9.50825 12.8306 9.37533 12.8816C9.23607 12.6109 9.00481 12.4136 8.7031 12.3109C8.53637 12.2532 8.37037 12.224 8.21014 12.224C7.93029 12.224 7.67259 12.3062 7.44265 12.4698C7.33419 12.3343 7.19676 12.2248 7.04044 12.1493C6.88412 12.0738 6.71289 12.0343 6.5393 12.0336C6.2319 12.0343 5.93719 12.1562 5.71908 12.3728C5.43258 12.154 4.29604 11.4318 1.25384 10.741C1.10661 10.7079 0.76842 10.6109 0.561226 10.5502C0.526701 10.7151 0.500724 10.8817 0.483398 11.0493C0.483398 11.0493 1.04458 11.1837 1.1549 11.2087C4.26296 11.8988 5.28978 12.6165 5.4633 12.7522C5.4044 12.8939 5.37389 13.0458 5.37351 13.1992C5.37322 13.8412 5.89541 14.3641 6.53811 14.3647C6.61003 14.3647 6.68136 14.3584 6.75166 14.3455C6.84839 14.818 7.15778 15.1762 7.63006 15.3601C7.76814 15.4131 7.90799 15.4403 8.04504 15.4403C8.13364 15.4404 8.22299 15.4295 8.31027 15.4072C8.3974 15.6287 8.59381 15.9052 9.03257 16.0834C9.1866 16.1453 9.34063 16.1778 9.49023 16.1778C9.61154 16.1779 9.7319 16.1564 9.84569 16.1143C9.94907 16.366 10.1249 16.5814 10.3508 16.7331C10.5768 16.8848 10.8427 16.9659 11.1149 16.9662C11.2984 16.9662 11.4802 16.9293 11.6492 16.8577C11.8183 16.7861 11.9712 16.6813 12.099 16.5495C12.3208 16.6727 12.7887 16.8957 13.2615 16.8964C13.3228 16.8964 13.3803 16.892 13.4376 16.8852C13.9072 16.8258 14.1257 16.6421 14.2262 16.4993C14.2443 16.4745 14.2607 16.448 14.2746 16.4204C14.3854 16.4525 14.5072 16.4785 14.6469 16.4788C14.9034 16.4788 15.1496 16.3913 15.3986 16.21C15.643 16.0338 15.8165 15.7807 15.8416 15.5654C15.8419 15.5624 15.8425 15.5595 15.8431 15.5561C15.9254 15.5732 16.01 15.5818 16.0943 15.5818C16.3584 15.5818 16.6181 15.4995 16.8664 15.3369C17.3449 15.0229 17.4283 14.6131 17.4203 14.3446C17.5041 14.3624 17.5896 14.3712 17.6748 14.3712C17.9227 14.3712 18.166 14.2966 18.3981 14.1487C18.6949 13.9592 18.8733 13.6687 18.9004 13.3307C18.9181 13.0992 18.8623 12.868 18.7409 12.6701C19.5431 12.3245 21.3764 11.6557 23.535 11.1691C23.5212 11.0023 23.4988 10.8363 23.468 10.6718C20.8559 11.2515 18.9067 12.095 18.4186 12.3123" fill="#2A3C8E" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2934_133">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Mercado Pago
                        </span>
                    </li>
                    <li className="booking-payment__options-prepayment">
                        <input type="radio" name="paymentType" value="prepayment" className="js-paymentType hidden" />
                        <span className="glyphicon glyphicon-md" />
                        Transferencia / Depósito
                    </li>
                </>
            ) :
                <>
                    <li className="booking-payment__options-pos on">
                        <input type="radio" name="paymentType" value="pos" className="js-paymentType hidden" />
                        <span className="glyphicon glyphicon-md"></span>
                        Tarjeta
                    </li>
                    <li className="booking-payment__options-prepayment">
                        <input type="radio" name="paymentType" value="prepayment" className="js-paymentType hidden" />
                        <span className="glyphicon glyphicon-md" />
                        Transferencia / Depósito
                    </li>
                </>
            }
        </>
    );
};

const TransferenciaComponent = () => {

    return (
        <>
            <div className="main__transferencia">
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet={"https://multitravelcom.github.io/MT/Secciones/Booking-2/MercadoPago/MercadoPago-Desktop.png"}
                    />
                    <source
                        media="(min-width: 768px) and (max-width: 1023px)"
                        srcSet={"https://multitravelcom.github.io/MT/Secciones/Booking-2/MercadoPago/MercadoPago-Tablet.png"}
                    />
                    <source
                        media="(max-width: 767px)"
                        srcSet={"https://multitravelcom.github.io/MT/Secciones/Booking-2/MercadoPago/MercadoPago-Mobile.png"}
                    />
                    <img
                        alt=""
                        src={"https://multitravelcom.github.io/MT/Secciones/Booking-2/MercadoPago/MercadoPago-Desktop.png"}
                    />
                </picture>
            </div>
        </>
    );
};

const buttonPaymentMp = document.querySelector('.booking-payment__options');
ReactDOM.render(<ButtonsPaymentMp />, buttonPaymentMp);

const shouldRenderTransferencia = checkPaymentMethod() === 13;

if (shouldRenderTransferencia) {
    const posElement = document.querySelector('.booking-payment__info.pos');
    const transferenciaContainer = document.createElement('div');
    ReactDOM.render(<TransferenciaComponent />, transferenciaContainer);
    posElement.appendChild(transferenciaContainer);
}


// document.addEventListener('DOMContentLoaded', function () {
//     const liElement = document.querySelector('.booking-payment__options-prepayment');
//     const bookingPaymentOptions = document.querySelector('.booking-payment__options');

//     if (liElement) {
//         liElement.childNodes.forEach(node => {
//             if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() === 'Transferencia') {
//                 node.textContent = 'Transferencia / Efectivo';
//                 bookingPaymentOptions.style.display = 'inline-block';
//             }
//         });
//     }
// });
