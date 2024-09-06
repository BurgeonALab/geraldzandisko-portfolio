$(function () {
  var doc = document;
  var el = doc.createElement('script');
  el.type = 'application/ld+json';
  el.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gerald Zandisko",
    "nationality": "Indonesian",
    "affiliation": [
      {
        "@type": "Organization",
        "name": "PT. Valbury Asia Futures",
        "sameAs": [
          "https://twitter.com/valbury_futures",
          "https://facebook.com/valburyfuturesofficial",
          "https://linkedin.com/company/valburyasiafutures",
          "https://youtube.com/c/ValburyAsiaFutures_Official"
        ]
      }
    ],
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Universitas Mikroskil",
        "sameAs": "https://mikroskil.ac.id"
      }
    ],
    "gender": "Male",
    "description": "Founder, Technopreneur, and Director",
    "disambiguatingDescription": "Founder and Managing Director of PT. Burgeon Adaire International",
    "jobTitle": "Managing Director",
    "worksFor": [
      {
        "@type": "Organization",
        "name": "PT. Burgeon Adaire International",
        "sameAs": [
          "https://twitter.com/burgeonadaire",
          "https://www.linkedin.com/company/burgeonadaire",
          "https://www.instagram.com/burgeonadaire",
          "https://theorg.com/org/pt-burgeon-adaire-international"
        ]
      }
    ],
    "url": "https://geraldzandisko.burgeonadaire.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Meteorologi III No. 26",
      "addressLocality": "Medan",
      "addressRegion": "Sumatera Utara",
      "postalCode": "20221",
      "addressCountry": "Indonesia"
    },
    "birthPlace": "Jakarta, Indonesia",
    "image": "https://firebasestorage.googleapis.com/v0/b/gerraour-bee69.appspot.com/o/allaround%2FMe4.jpg?alt=media&token=0799f447-13fe-4fb4-a34d-028833b9c789",
    "sameAs": [
      "https://instagram.com/geraldzandisko",
      "https://twitter.com/geraldzandisko",
      "https://linkedin.com/in/geraldzandisko",
      "https://github.com/geraldzandisko",
      "https://behance.net/gerraour"
    ],
    "telephone": "(+62) 811-630-0048",
    "email": "geraldzandisko@burgeonadaire.com"
  })

  doc.querySelector('head').appendChild(el);
})