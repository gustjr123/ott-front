export const fetchCookie = (value) => {
  const apiUrl = "https://web.sehee.shop/prod/cookie";
  const url = `${apiUrl}?path=${encodeURIComponent(value)}`;

  fetch(url, {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      const { Cookie, Domain, Link, VideoLink } = data.body;

      console.log("fetchfetch!!!!", Cookie);

      Domain = ".sehee.shop";

      // 쿠키 값을 설정합니다.
      document.cookie = `CloudFront-Policy=${Cookie.Policy}; domain=${Domain}; path=/; secure=true`;
      document.cookie = `CloudFront-Signature=${Cookie.Signature}; domain=${Domain}; path=/; secure=true`;
      document.cookie = `CloudFront-Key-Pair-Id=${Cookie.KeyPair}; domain=${Domain}; path=/; secure=true`;

      const linkpath = encodeURIComponent(VideoLink);
      window.open(`${Link}?link=${linkpath}`);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
