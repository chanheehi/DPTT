function goToPage(url) {
    window.location.href = url
}

function sendLinkCustom() {
    Kakao.init("[952165fea6d8d997c88380caddcc579e]");
    Kakao.Link.sendCustom({
        templateId: [104804]
    });
}


try {
    function sendLinkDefault() {
        Kakao.init('[952165fea6d8d997c88380caddcc579e]')
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: '딸기 치즈 케익',
                description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
                imageUrl: 'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
                link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                    webUrl: 'https://developers.kakao.com',
                },
            },
            social: {
                likeCount: 286,
                commentCount: 45,
                sharedCount: 845,
            },
            buttons: [
                {
                    title: '웹으로 보기',
                    link: {
                        mobileWebUrl: 'https://developers.kakao.com',
                        webUrl: 'https://developers.kakao.com',
                    },
                },
                {
                    title: '앱으로 보기',
                    link: {
                        mobileWebUrl: 'https://developers.kakao.com',
                        webUrl: 'https://developers.kakao.com',
                    },
                },
            ],
        })
    }
    window.kakaoDemoCallback && window.kakaoDemoCallback();
} catch(e) {
    window.kakaoDemoException && window.kakaoDemoException(e);
}