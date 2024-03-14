<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Harris Poll</title>

    <!-- Fonts -->
    {{-- <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> --}}
    <style>
        @font-face {
            font-family: 'Graphik';
            src: url("{{ asset('fonts/Graphik-Semibold-Web.woff2') }}") format("woff2");
            font-weight: 600;
        }

        @font-face {
            font-family: 'Graphik';
            src: url("{{ asset('fonts/Graphik-Regular-Web.woff2') }}") format("woff2");
            font-weight: 400;
        }
    </style>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
</head>

<body class="home page-template page-template-template-home page-template-template-home-php page page-id-1539 home-animation-complete">
    <!-- Header -->
    <header class="wp-top" style="opacity: 1;">
        <div class="header-top">
            <div class="wrap">
                <div class="company"><a href="https://www.stagwellglobal.com" target="_blank">A Stagwell Company</a>
                </div>
                <nav class="nav-header-top">
                    <ul id="menu-top-navigation" class="menu">
                        <li id="menu-item-2013"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2013"><a
                                href="https://theharrispoll.com/about/">About</a></li>
                        <li id="menu-item-1344"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1344"><a
                                target="_blank" rel="noopener" href="https://jobs.lever.co/harrisinsights">Careers</a>
                        </li>
                        <li id="menu-item-2014"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2014"><a
                                href="https://theharrispoll.com/contact/">Contact Us</a></li>
                        <li id="menu-item-2245"
                            class="search menu-item menu-item-type-post_type menu-item-object-page menu-item-2245"><a
                                href="https://theharrispoll.com/search/">Search</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="header-bottom">
            <div class="wrap">
                <a href="/#skip-intro" class="logo" title="Home Page"></a>
                <nav class="nav-main">
                    <ul>
                        <li id="menu-item-0"><a href="#">Solutions</a></li>
                        <li id="menu-item-1"><a href="#">Insights &amp; News</a></li>
                        <li id="menu-item-2"><a href="#">Partners</a></li>
                        <li id="menu-item-3"><a href="#">Industries</a></li>
                        <li class="btn"><a href="#request-a-demo">Request a Demo</a></li>
                    </ul>
                </nav>
                <a href="#" class="btn-mobile-menu"><span>Show Mobile Menu</span></a>
            </div>
        </div>
        <div class="search-overlay">
            <div class="wrap">
                <form action="/search/" method="get" data-hs-cf-bound="true">
                    <input type="text" name="q" placeholder="Search">
                    <button type="submit" title="Submit"></button>
                </form>
            </div>
        </div>
        <div class="sub-menus">
            <div class="wrap">
                <div class="sub-menu-item" id="sub-menu-item-0">
                    <div class="featured-area-container">
                        <div>
                            <div>
                                <div class="title">Featured Case Studies</div>
                                <div class="featured-items">
                                    <div>
                                        <p class="img"><a
                                                href="https://theharrispoll.com/briefs/zara-case-study/"><img
                                                    src="https://theharrispoll.com/wp-content/uploads/2024/01/zara21000-e1706040145181-1024x689.png"
                                                    alt=""></a></p>
                                        <p class="item-title"><a class="lnk-underline"
                                                href="https://theharrispoll.com/briefs/zara-case-study/">Zara: An
                                                Ill-Timed Ad Campaign</a></p>
                                    </div>
                                    <div>
                                        <p class="img"><a
                                                href="https://theharrispoll.com/briefs/wnba-case-study/"><img
                                                    src="https://theharrispoll.com/wp-content/uploads/2024/01/Asset-151000-1024x683.png"
                                                    alt=""></a></p>
                                        <p class="item-title"><a class="lnk-underline"
                                                href="https://theharrispoll.com/briefs/wnba-case-study/">WNBA: A
                                                Partnership with Celebrity Star Power</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-sections">
                        <div class="menu-section section-layout-left">
                            <div class="title"><a class="lnk-arrow-right" href="/solutions/questbrand/">QuestBrand</a>
                            </div>
                            <div class="description">QuestBrand is an industry-leading brand management tool. It offers
                                real-time insight into thousands of brands and hundreds of consumers segments, so you
                                can instantly analyze, act, and evaluate marketing campaigns and brand strategy.</div>
                            <div class="link-sections">
                                <div class="row-2">
                                    <div class="link-section-title">Features</div>
                                    <div class="items">
                                        <div><a class="lnk-underline" href="/solutions/questbrand/brand-equity/ ">Brand
                                                Equity</a></div>
                                        <div><a class="lnk-underline"
                                                href="/solutions/questbrand/competitive-intelligence/">Competitive
                                                Intelligence</a></div>
                                        <div><a class="lnk-underline"
                                                href="/solutions/questbrand/conversion-funnel/ ">Conversion Funnel</a>
                                        </div>
                                        <div><a class="lnk-underline"
                                                href="/solutions/questbrand/brand-perception/">Brand Perception</a>
                                        </div>
                                        <div><a class="lnk-underline"
                                                href="/solutions/questbrand/market-segmentation/ ">Market
                                                Segmentation</a></div>
                                        <div><a class="lnk-underline" href="/solutions/questbrand/brand-trends/">Brand
                                                Trends</a></div>
                                        <div><a class="lnk-underline"
                                                href="/solutions/questbrand/advertising-recall/ ">Advertising
                                                Recall</a></div>
                                        <div><a class="lnk-underline"
                                                href="/solutions/questbrand/advanced-analytics/">Advanced Analytics</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row-1">
                                    <div class="link-section-title">Additional Information</div>
                                    <div class="items">
                                        <div><a class="lnk-underline"
                                                href="/solutions/questbrand/questbrand-faq/">FAQ</a></div>
                                        <div><a class="lnk-underline" href="/contact/#general-inquiry">Product
                                                Support</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-container"><a class="btn-small" href="#request-a-demo">Request a Demo</a>
                            </div>
                        </div>
                        <div class="menu-section section-layout-right">
                            <div class="title"><a class="lnk-arrow-right"
                                    href="/solutions/harris-custom-research/">Harris Custom Research</a></div>
                            <div class="description">Via advanced market research and analytical methodologies, we help
                                your company go to market faster, manage its reputation, and measure your consumer’s
                                needs. </div>
                        </div>
                        <div class="menu-section section-layout-right">
                            <div class="title"><a class="lnk-arrow-right" href="/solutions/harris-on-demand/">Harris
                                    On Demand</a></div>
                            <div class="description">Harris On Demand provides affordable, reliable data to answer your
                                urgent questions. This cost-effective tool has been helping leaders refine their
                                strategies for more than 20 years.</div>
                        </div>
                        <div class="menu-section section-layout-right">
                            <div class="title"><a class="lnk-arrow-right"
                                    href="/solutions/harris-custom-research/corporate-reputation/">Reputation &amp;
                                    Corporate Strategy</a></div>
                            <div class="description">The Harris Poll’s Reputation &amp; Corporate Strategy Practice
                                provides the marketplace with a trusted source of business intelligence in an
                                increasingly volatile and connected world.</div>
                        </div>
                        <div class="menu-section section-layout-right">
                            <div class="title"><a class="lnk-arrow-right"
                                    href="/solutions/thought-leadership-practice/">Thought Leadership</a></div>
                            <div class="description">Our Thought Leadership Practice helps clients build an
                                industry-leading position.</div>
                        </div>
                    </div>
                </div>
                <div class="sub-menu-item" id="sub-menu-item-1">
                    <div class="featured-area-container">
                        <div>
                            <div>
                                <div class="title">Featured Reports</div>
                                <div class="featured-items">
                                    <div>
                                        <p class="img"><a
                                                href="https://theharrispoll.com/insights-news/reports/the-american-consumer/"><img
                                                    src="https://theharrispoll.com/wp-content/uploads/2022/03/Spend-Trends-Report_cover-793x1024.png"
                                                    alt=""></a></p>
                                        <p class="item-title"><a class="lnk-underline"
                                                href="https://theharrispoll.com/insights-news/reports/the-american-consumer/">The
                                                American Consumer</a></p>
                                    </div>
                                    <div>
                                        <p class="img"><a href="/insights-news/reports/covid-19-tracker/"><img
                                                    src="https://theharrispoll.com/wp-content/uploads/2021/12/photo-cropped-scaled-e1586270190839-1-1024x374.jpg"
                                                    alt=""></a></p>
                                        <p class="item-title"><a class="lnk-underline"
                                                href="/insights-news/reports/covid-19-tracker/">Harris Poll COVID-19
                                                Tracker</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-sections">
                        <div class="menu-section section-layout-left">
                            <div class="title"><a class="lnk-arrow-right" href="/insights-news/reports/">Reports</a>
                            </div>
                            <div class="description">Our reports investigate how people are responding to our
                                ever-changing world, exploring subjects ranging from the Super Bowl to TikTok. They
                                analyze data from our public polling to provide actionable insights for marketers and
                                business leaders. </div>
                            <div class="link-sections">
                                <div class="row-2">
                                    <div class="link-section-title">Social Impact Reports</div>
                                    <div class="items">
                                        <div><a class="lnk-underline"
                                                href="/insights-news/reports/covid-19-tracker/">COVID-19 Tracker</a>
                                        </div>
                                        <div><a class="lnk-underline"
                                                href="/partners/universities-non-profits/milken-institute/">The
                                                Listening Project</a></div>
                                        <div><a class="lnk-underline" href="/partners/media/axios-harrispoll-100/">The
                                                Axios Harris Poll 100</a></div>
                                        <div><a class="lnk-underline"
                                                href="https://theharrispoll.com/briefs/the-great-awakening/">The Great
                                                Awakening</a></div>
                                    </div>
                                </div>
                                <div class="row-3">
                                    <div class="link-section-title">Report Series</div>
                                    <div class="items">
                                        <div><a class="lnk-underline"
                                                href="/insights-news/reports/industry-insights/">Industry Insights</a>
                                        </div>
                                        <div><a class="lnk-underline"
                                                href="/insights-news/reports/consumer-insights/">Consumer Insights</a>
                                        </div>
                                        <div><a class="lnk-underline"
                                                href="/insights-news/reports/sports-and-events-brand-sponsorships/">Sports
                                                &amp; Entertainment</a></div>
                                        <div><a class="lnk-underline"
                                                href="/insights-news/reports/inclusive-insights-reports/">Inclusive
                                                Insights</a></div>
                                        <div><a class="lnk-underline"
                                                href="/insights-news/reports/platforms-brands/">Platforms &amp;
                                                Brands</a></div>
                                        <div><a class="lnk-underline"
                                                href="/insights-news/reports/the-story-newsletter/">The Story
                                                Newsletter</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="menu-section section-layout-right"><img class="featured-item-image"
                                alt=""
                                src="https://theharrispoll.com/wp-content/uploads/2024/01/phillip-goldsberry-CtV2fhyHj6I-unsplash.jpg">
                            <div class="featured-indent">
                                <div class="title"><a class="lnk-arrow-right"
                                        href="/insights-news/news-events/">News &amp; Events</a></div>
                                <div class="featured-item">
                                    <div class="fi-label">Featured</div>
                                    <div class="fi-title"><a class="lnk-underline lnk-up-right"
                                            href="https://adage.com/article/special-report-super-bowl/super-bowl-2024-commercials-what-viewers-want-and-dont-want-brands-do/2537936">Super
                                            Bowl Ads - What Viewers Want And Don't Want In 2024 Commercials</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="menu-section section-layout-right"><img class="featured-item-image"
                                alt=""
                                src="https://theharrispoll.com/wp-content/uploads/2024/02/AdobeStock_304119895-1024x683.jpeg">
                            <div class="featured-indent">
                                <div class="title"><a class="lnk-arrow-right"
                                        href="/insights-news/briefs/">Briefs</a></div>
                                <div class="featured-item">
                                    <div class="fi-label">Featured</div>
                                    <div class="fi-title"><a class="lnk-underline"
                                            href="https://theharrispoll.com/briefs/theyre-back-gen-z-is-reviving-uggs-popularity/">They’re
                                            back! Gen Z is reviving UGG’s popularity</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="menu-section section-layout-right"><img class="featured-item-image"
                                alt=""
                                src="https://theharrispoll.com/wp-content/uploads/2023/12/ftx21000-e1702331761454-1024x690.jpg">
                            <div class="featured-indent">
                                <div class="title"><a class="lnk-arrow-right"
                                        href="/insights-news/case-studies/">Case Studies</a></div>
                                <div class="featured-item">
                                    <div class="fi-label">Featured</div>
                                    <div class="fi-title"><a class="lnk-underline"
                                            href="https://theharrispoll.com/briefs/ftx-case-study/">FTX: Weathering A
                                            Brand Crisis</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sub-menu-item" id="sub-menu-item-2">
                    <div class="featured-area-container">
                        <div>
                            <div>
                                <div class="title">Featured Insight</div>
                                <div class="featured-items">
                                    <div>
                                        <p class="img"><a
                                                href="https://theharrispoll.com/insights-news/reports/inclusive-insights-reports/"><img
                                                    src="https://theharrispoll.com/wp-content/uploads/2023/06/AdobeStock_562906423-1024x662.jpeg"
                                                    alt=""></a></p>
                                        <p class="item-title"><a class="lnk-underline"
                                                href="https://theharrispoll.com/insights-news/reports/inclusive-insights-reports/">Inclusive
                                                Insights - LGBTQIA+</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-sections">
                        <div class="menu-section section-layout-left">
                            <div class="title"><a class="lnk-arrow-right" href="/partners/media/">Media</a></div>
                            <div class="description">We partner with new and traditional media outlets to explore the
                                issues that matter most to their audience, from executive trends to the latest in
                                design. </div>
                            <div class="link-sections">
                                <div class="row-2">
                                    <div class="items">
                                        <div><a class="lnk-underline" href="/partners/media/ad-age/">Ad Age</a></div>
                                        <div><a class="lnk-underline"
                                                href="/partners/media/axios-harrispoll-100/">Axios</a></div>
                                        <div><a class="lnk-underline" href="/partners/media/crains/">Crain's Chicago
                                                Business</a></div>
                                        <div><a class="lnk-underline" href="/partners/media/fast-company/">Fast
                                                Company</a></div>
                                        <div><a class="lnk-underline"
                                                href="/partners/media/front-office-sports/">Front Office Sports</a>
                                        </div>
                                        <div><a class="lnk-underline" href="/partners/media/grid/">Grid</a></div>
                                        <div><a class="lnk-underline" href="/partners/media/morning-brew/">Morning
                                                Brew</a></div>
                                        <div><a class="lnk-underline" href="/partners/media/protocol/">Protocol</a>
                                        </div>
                                        <div><a class="lnk-underline" href="/partners/media/time/">TIME</a></div>
                                        <div><a class="lnk-underline" href="/partners/media/yahoo-finance/">Yahoo
                                                Finance</a></div>
                                        <div><a class="lnk-underline" href="/partners/media/healthday/">HealthDay</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="menu-section section-layout-right">
                            <div class="title"><a class="lnk-arrow-right"
                                    href="/partners/universities-non-profits/">Universities &amp; Non-profits</a></div>
                            <div class="description">To inform their work and expand their reach, we partner with
                                universities and nonprofits to investigate some of today’s most pressing issues. </div>
                            <div class="link-sections">
                                <div class="row-2">
                                    <div class="items">
                                        <div><a class="lnk-underline"
                                                href="https://harvardharrispoll.com/">Harvard</a></div>
                                        <div><a class="lnk-underline"
                                                href="/universities-non-profits/just-capital/ ">JUST Capital</a></div>
                                        <div><a class="lnk-underline"
                                                href="/partners/universities-non-profits/macarthur-foundation/ ">MacArthur
                                                Foundation</a></div>
                                        <div><a class="lnk-underline"
                                                href="/partners/universities-non-profits/milken-institute/">The Milken
                                                Institute</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sub-menu-item" id="sub-menu-item-3">
                    <div class="featured-area-container">
                        <div>
                            <div>
                                <div class="title">Featured Insight</div>
                                <div class="featured-items">
                                    <div>
                                        <p class="img"><a
                                                href="https://theharrispoll.com/briefs/ready-for-it-in-our-wildest-dreams-we-didnt-expect-young-womens-interest-in-the-nfl-to-surge/"><img
                                                    src="https://theharrispoll.com/wp-content/uploads/2024/01/AdobeStock_620528614-1024x683.jpeg"
                                                    alt=""></a></p>
                                        <p class="item-title"><a class="lnk-underline"
                                                href="https://theharrispoll.com/briefs/ready-for-it-in-our-wildest-dreams-we-didnt-expect-young-womens-interest-in-the-nfl-to-surge/">…Ready
                                                For It? In Our Wildest Dreams We Didn’t Expect Young Women’s Interest in
                                                the NFL to Surge</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-sections">
                        <div class="menu-section section-layout-full">
                            <div class="title"><a class="lnk-arrow-right" href="/industries/">Industries</a></div>
                            <div class="description">A look behind the trends driving the country’s largest industries.
                            </div>
                            <div class="link-sections">
                                <div class="row-3">
                                    <div class="items">
                                        <div><a class="lnk-underline" href="/industries/apparel-fashion/">Apparel
                                                &amp; Fashion</a></div>
                                        <div><a class="lnk-underline" href="/industries/automotive/">Automotive</a>
                                        </div>
                                        <div><a class="lnk-underline" href="/industries/cpg-food-beverage/ ">CPG: Food
                                                &amp; Beverage</a></div>
                                        <div><a class="lnk-underline" href="/industries/financial-services/">Financial
                                                Services</a></div>
                                        <div><a class="lnk-underline" href="/industries/healthcare/">Healthcare</a>
                                        </div>
                                        <div><a class="lnk-underline" href="/industries/home-care-products">Home
                                                Care</a></div>
                                        <div><a class="lnk-underline" href="/industries/personal-care/">Personal
                                                Care</a></div>
                                        <div><a class="lnk-underline" href="/industries/qsr-fast-casual/ ">QSR + Fast
                                                Casual</a></div>
                                        <div><a class="lnk-underline" href="/industries/retail/">Retail</a></div>
                                        <div><a class="lnk-underline" href="/industries/sports-entertainment/">Sports
                                                &amp; Entertainment</a></div>
                                        <div><a class="lnk-underline" href="/industries/technology-gaming/">Technology
                                                &amp; Gaming</a></div>
                                        <div><a class="lnk-underline" href="/industries/travel/">Travel</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="mobile-menu">
            <div class="m-search">
                <form action="/search/" method="get" data-hs-cf-bound="true">
                    <input type="text" name="q" placeholder="Search">
                    <button type="submit" title="Submit"></button>
                </form>
            </div>
            <div class="m-main-nav">
                <div><a href="#">Solutions</a>
                    <div class="sub-menu-item">
                        <div class="menu-section">
                            <div class="title"><a class="lnk-arrow-right"
                                    href="/solutions/questbrand/">QuestBrand</a></div>
                            <div class="link-sections">
                                <div>
                                    <div class="link-section-title">Features</div>
                                    <div class="items">
                                        <div><a class="lnk-underline"
                                                href="/solutions/questbrand/brand-equity/ ">Brand Equity</a></div>
                                        <div><a class="lnk-underline"
                                                href="/solutions/questbrand/competitive-intelligence/">Competitive
                                                Intelligence</a></div>
                                        <div><a class="lnk-underline"
                                                href="/solutions/questbrand/conversion-funnel/ ">Conversion Funnel</a>
                                        </div>
                                        <div><a class="lnk-underline"
                                                href="/solutions/questbrand/brand-perception/">Brand Perception</a>
                                        </div>
                                        <div><a class="lnk-underline"
                                                href="/solutions/questbrand/market-segmentation/ ">Market
                                                Segmentation</a></div>
                                        <div><a class="lnk-underline" href="/solutions/questbrand/brand-trends/">Brand
                                                Trends</a></div>
                                        <div><a class="lnk-underline"
                                                href="/solutions/questbrand/advertising-recall/ ">Advertising
                                                Recall</a></div>
                                        <div><a class="lnk-underline"
                                                href="/solutions/questbrand/advanced-analytics/">Advanced Analytics</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="link-section-title">Additional Information</div>
                                    <div class="items">
                                        <div><a class="lnk-underline"
                                                href="/solutions/questbrand/questbrand-faq/">FAQ</a></div>
                                        <div><a class="lnk-underline" href="/contact/#general-inquiry">Product
                                                Support</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="menu-section">
                            <div class="title"><a class="lnk-arrow-right"
                                    href="/solutions/harris-custom-research/">Harris Custom Research</a></div>
                        </div>
                        <div class="menu-section">
                            <div class="title"><a class="lnk-arrow-right" href="/solutions/harris-on-demand/">Harris
                                    On Demand</a></div>
                        </div>
                        <div class="menu-section">
                            <div class="title"><a class="lnk-arrow-right"
                                    href="/solutions/harris-custom-research/corporate-reputation/">Reputation &amp;
                                    Corporate Strategy</a></div>
                        </div>
                        <div class="menu-section">
                            <div class="title"><a class="lnk-arrow-right"
                                    href="/solutions/thought-leadership-practice/">Thought Leadership</a></div>
                        </div>
                    </div>
                </div>
                <div><a href="#">Insights &amp; News</a>
                    <div class="sub-menu-item">
                        <div class="menu-section">
                            <div class="title"><a class="lnk-arrow-right" href="/insights-news/reports/">Reports</a>
                            </div>
                            <div class="link-sections">
                                <div>
                                    <div class="link-section-title">Social Impact Reports</div>
                                    <div class="items">
                                        <div><a class="lnk-underline"
                                                href="/insights-news/reports/covid-19-tracker/">COVID-19 Tracker</a>
                                        </div>
                                        <div><a class="lnk-underline"
                                                href="/partners/universities-non-profits/milken-institute/">The
                                                Listening Project</a></div>
                                        <div><a class="lnk-underline" href="/partners/media/axios-harrispoll-100/">The
                                                Axios Harris Poll 100</a></div>
                                        <div><a class="lnk-underline"
                                                href="https://theharrispoll.com/briefs/the-great-awakening/">The Great
                                                Awakening</a></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="link-section-title">Report Series</div>
                                    <div class="items">
                                        <div><a class="lnk-underline"
                                                href="/insights-news/reports/industry-insights/">Industry Insights</a>
                                        </div>
                                        <div><a class="lnk-underline"
                                                href="/insights-news/reports/consumer-insights/">Consumer Insights</a>
                                        </div>
                                        <div><a class="lnk-underline"
                                                href="/insights-news/reports/sports-and-events-brand-sponsorships/">Sports
                                                &amp; Entertainment</a></div>
                                        <div><a class="lnk-underline"
                                                href="/insights-news/reports/inclusive-insights-reports/">Inclusive
                                                Insights</a></div>
                                        <div><a class="lnk-underline"
                                                href="/insights-news/reports/platforms-brands/">Platforms &amp;
                                                Brands</a></div>
                                        <div><a class="lnk-underline"
                                                href="/insights-news/reports/the-story-newsletter/">The Story
                                                Newsletter</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="menu-section">
                            <div class="title"><a class="lnk-arrow-right" href="/insights-news/news-events/">News
                                    &amp; Events</a></div>
                        </div>
                        <div class="menu-section">
                            <div class="title"><a class="lnk-arrow-right" href="/insights-news/briefs/">Briefs</a>
                            </div>
                        </div>
                        <div class="menu-section">
                            <div class="title"><a class="lnk-arrow-right" href="/insights-news/case-studies/">Case
                                    Studies</a></div>
                        </div>
                    </div>
                </div>
                <div><a href="#">Partners</a>
                    <div class="sub-menu-item">
                        <div class="menu-section">
                            <div class="title"><a class="lnk-arrow-right" href="/partners/media/">Media</a></div>
                            <div class="link-sections">
                                <div>
                                    <div class="items">
                                        <div><a class="lnk-underline" href="/partners/media/ad-age/">Ad Age</a></div>
                                        <div><a class="lnk-underline"
                                                href="/partners/media/axios-harrispoll-100/">Axios</a></div>
                                        <div><a class="lnk-underline" href="/partners/media/crains/">Crain's Chicago
                                                Business</a></div>
                                        <div><a class="lnk-underline" href="/partners/media/fast-company/">Fast
                                                Company</a></div>
                                        <div><a class="lnk-underline"
                                                href="/partners/media/front-office-sports/">Front Office Sports</a>
                                        </div>
                                        <div><a class="lnk-underline" href="/partners/media/grid/">Grid</a></div>
                                        <div><a class="lnk-underline" href="/partners/media/morning-brew/">Morning
                                                Brew</a></div>
                                        <div><a class="lnk-underline" href="/partners/media/protocol/">Protocol</a>
                                        </div>
                                        <div><a class="lnk-underline" href="/partners/media/time/">TIME</a></div>
                                        <div><a class="lnk-underline" href="/partners/media/yahoo-finance/">Yahoo
                                                Finance</a></div>
                                        <div><a class="lnk-underline" href="/partners/media/healthday/">HealthDay</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="menu-section">
                            <div class="title"><a class="lnk-arrow-right"
                                    href="/partners/universities-non-profits/">Universities &amp; Non-profits</a></div>
                            <div class="link-sections">
                                <div>
                                    <div class="items">
                                        <div><a class="lnk-underline"
                                                href="https://harvardharrispoll.com/">Harvard</a></div>
                                        <div><a class="lnk-underline"
                                                href="/universities-non-profits/just-capital/ ">JUST Capital</a></div>
                                        <div><a class="lnk-underline"
                                                href="/partners/universities-non-profits/macarthur-foundation/ ">MacArthur
                                                Foundation</a></div>
                                        <div><a class="lnk-underline"
                                                href="/partners/universities-non-profits/milken-institute/">The Milken
                                                Institute</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div><a href="#">Industries</a>
                    <div class="sub-menu-item">
                        <div class="menu-section">
                            <div class="title"><a class="lnk-arrow-right" href="/industries/">Industries</a></div>
                            <div class="link-sections">
                                <div>
                                    <div class="items">
                                        <div><a class="lnk-underline" href="/industries/apparel-fashion/">Apparel
                                                &amp; Fashion</a></div>
                                        <div><a class="lnk-underline" href="/industries/automotive/">Automotive</a>
                                        </div>
                                        <div><a class="lnk-underline" href="/industries/cpg-food-beverage/ ">CPG: Food
                                                &amp; Beverage</a></div>
                                        <div><a class="lnk-underline" href="/industries/financial-services/">Financial
                                                Services</a></div>
                                        <div><a class="lnk-underline" href="/industries/healthcare/">Healthcare</a>
                                        </div>
                                        <div><a class="lnk-underline" href="/industries/home-care-products">Home
                                                Care</a></div>
                                        <div><a class="lnk-underline" href="/industries/personal-care/">Personal
                                                Care</a></div>
                                        <div><a class="lnk-underline" href="/industries/qsr-fast-casual/ ">QSR + Fast
                                                Casual</a></div>
                                        <div><a class="lnk-underline" href="/industries/retail/">Retail</a></div>
                                        <div><a class="lnk-underline" href="/industries/sports-entertainment/">Sports
                                                &amp; Entertainment</a></div>
                                        <div><a class="lnk-underline" href="/industries/technology-gaming/">Technology
                                                &amp; Gaming</a></div>
                                        <div><a class="lnk-underline" href="/industries/travel/">Travel</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="m-top-nav">
                <ul id="menu-top-navigation-1" class="menu">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2013"><a
                            href="https://theharrispoll.com/about/">About</a></li>
                    <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1344"><a
                            target="_blank" rel="noopener" href="https://jobs.lever.co/harrisinsights">Careers</a>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2014"><a
                            href="https://theharrispoll.com/contact/">Contact Us</a></li>
                    <li class="search menu-item menu-item-type-post_type menu-item-object-page menu-item-2245"><a
                            href="https://theharrispoll.com/search/">Search</a></li>
                </ul>
            </div>
            <div class="m-social">
                <ul>
                    <li><a href="https://twitter.com/HarrisPoll" class="twitter">Twitter</a></li>
                    <li><a href="https://www.linkedin.com/company/harris-poll/" class="linkedin">Linkedin</a></li>
                </ul>
            </div>
            <div class="m-company">
                <a class="lnk-up-right" href="https://www.stagwellglobal.com" target="_blank">A Stagwell Company</a>
            </div>
            <div class="m-btn-container">
                <a href="#request-a-demo">Request a Demo</a>
            </div>
        </div>
    </header>
    <!-- End Header -->

    <!-- Main -->
    <section id="maincontent">
        @yield('content')
    </section>
    <!-- End Main -->
    <div class="cta near-black-bg img-mode-cover has-form" data-hash="footer" style="background-image: url()">
        <div class="wrap std-wrap">
            <div class="content">
                <div class="full-width"></div>
                <div class="cols std-content">
                    <div class="col-1">
                        <h2 class="orange">Keep your finger on the pulse.</h2>
                        <p>Subscribe to our newsletter for the latest trends in business, culture, and more.</p>
                    </div>
                    <div class="col-2">
                        <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
                        <script data-hubspot-rendered="true">
                            hbspt.forms.create({
                                region: "na1",
                                portalId: "8654532",
                                formId: "f7aa9e43-69c3-43be-830c-42f8187997b1"
                            });
                        </script>
                        <div id="hbspt-form-5246ddb9-8854-4750-96e6-b099f3880f7e" class="hbspt-form"
                            data-hs-forms-root="true">
                            <form id="hsForm_f7aa9e43-69c3-43be-830c-42f8187997b1" method="POST"
                                accept-charset="UTF-8" enctype="multipart/form-data" novalidate=""
                                action="https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/8654532/f7aa9e43-69c3-43be-830c-42f8187997b1"
                                class="hs-form-private hsForm_f7aa9e43-69c3-43be-830c-42f8187997b1 hs-form-f7aa9e43-69c3-43be-830c-42f8187997b1 hs-form-f7aa9e43-69c3-43be-830c-42f8187997b1_5246ddb9-8854-4750-96e6-b099f3880f7e hs-form stacked"
                                target="target_iframe_f7aa9e43-69c3-43be-830c-42f8187997b1"
                                data-instance-id="5246ddb9-8854-4750-96e6-b099f3880f7e"
                                data-form-id="f7aa9e43-69c3-43be-830c-42f8187997b1" data-portal-id="8654532"
                                data-test-id="hsForm_f7aa9e43-69c3-43be-830c-42f8187997b1" data-hs-cf-bound="true">
                                <div class="hs_email hs-email hs-fieldtype-text field hs-form-field"><label
                                        id="label-email-f7aa9e43-69c3-43be-830c-42f8187997b1" class=""
                                        placeholder="Enter your "
                                        for="email-f7aa9e43-69c3-43be-830c-42f8187997b1"><span></span></label>
                                    <legend class="hs-field-desc" style="display: none;"></legend>
                                    <div class="input"><input id="email-f7aa9e43-69c3-43be-830c-42f8187997b1"
                                            name="email" required="" placeholder="Email*" type="email"
                                            class="hs-input" inputmode="email" autocomplete="email" value="">
                                    </div>
                                </div>
                                <div class="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field"><label
                                        id="label-firstname-f7aa9e43-69c3-43be-830c-42f8187997b1" class=""
                                        placeholder="Enter your "
                                        for="firstname-f7aa9e43-69c3-43be-830c-42f8187997b1"><span></span></label>
                                    <legend class="hs-field-desc" style="display: none;"></legend>
                                    <div class="input"><input id="firstname-f7aa9e43-69c3-43be-830c-42f8187997b1"
                                            name="firstname" required="" placeholder="First name*" type="text"
                                            class="hs-input" inputmode="text" autocomplete="given-name"
                                            value=""></div>
                                </div>
                                <div class="hs_lastname hs-lastname hs-fieldtype-text field hs-form-field"><label
                                        id="label-lastname-f7aa9e43-69c3-43be-830c-42f8187997b1" class=""
                                        placeholder="Enter your "
                                        for="lastname-f7aa9e43-69c3-43be-830c-42f8187997b1"><span></span></label>
                                    <legend class="hs-field-desc" style="display: none;"></legend>
                                    <div class="input"><input id="lastname-f7aa9e43-69c3-43be-830c-42f8187997b1"
                                            name="lastname" required="" placeholder="Last name*" type="text"
                                            class="hs-input" inputmode="text" autocomplete="family-name"
                                            value=""></div>
                                </div>
                                <div class="hs_submit hs-submit">
                                    <div class="hs-field-desc" style="display: none;"></div>
                                    <div class="actions"><input type="submit" class="hs-button primary large"
                                            value="Submit"></div>
                                </div><input name="hs_context" type="hidden"
                                    value="{&quot;embedAtTimestamp&quot;:&quot;1707897068629&quot;,&quot;formDefinitionUpdatedAt&quot;:&quot;1648128605786&quot;,&quot;lang&quot;:&quot;en&quot;,&quot;embedType&quot;:&quot;REGULAR&quot;,&quot;disableCookieSubmission&quot;:&quot;true&quot;,&quot;clonedFromForm&quot;:&quot;da13a69b-a5a9-48cf-8f57-00c5176465f9&quot;,&quot;renderRawHtml&quot;:&quot;true&quot;,&quot;userAgent&quot;:&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36&quot;,&quot;pageTitle&quot;:&quot;The Harris Poll&quot;,&quot;pageUrl&quot;:&quot;https://theharrispoll.com/&quot;,&quot;isHubSpotCmsGeneratedPage&quot;:false,&quot;contentType&quot;:&quot;standard-page&quot;,&quot;hutk&quot;:&quot;73d83e617781d416d6d86026353d1744&quot;,&quot;__hsfp&quot;:1730434420,&quot;__hssc&quot;:&quot;78454539.1.1707897106594&quot;,&quot;__hstc&quot;:&quot;78454539.73d83e617781d416d6d86026353d1744.1707545329766.1707890987712.1707897106594.6&quot;,&quot;formTarget&quot;:&quot;#hbspt-form-5246ddb9-8854-4750-96e6-b099f3880f7e&quot;,&quot;rumScriptExecuteTime&quot;:4163,&quot;rumTotalRequestTime&quot;:5325,&quot;rumTotalRenderTime&quot;:5386,&quot;rumServiceResponseTime&quot;:1162,&quot;rumFormRenderTime&quot;:61,&quot;connectionType&quot;:&quot;4g&quot;,&quot;firstContentfulPaint&quot;:0,&quot;largestContentfulPaint&quot;:0,&quot;locale&quot;:&quot;en&quot;,&quot;timestamp&quot;:1707897106732,&quot;originalEmbedContext&quot;:{&quot;portalId&quot;:&quot;8654532&quot;,&quot;formId&quot;:&quot;f7aa9e43-69c3-43be-830c-42f8187997b1&quot;,&quot;region&quot;:&quot;na1&quot;,&quot;target&quot;:&quot;#hbspt-form-5246ddb9-8854-4750-96e6-b099f3880f7e&quot;,&quot;isBuilder&quot;:false,&quot;isTestPage&quot;:false,&quot;isPreview&quot;:false,&quot;isMobileResponsive&quot;:true},&quot;correlationId&quot;:&quot;5246ddb9-8854-4750-96e6-b099f3880f7e&quot;,&quot;renderedFieldsIds&quot;:[&quot;email&quot;,&quot;firstname&quot;,&quot;lastname&quot;],&quot;captchaStatus&quot;:&quot;NOT_APPLICABLE&quot;,&quot;emailResubscribeStatus&quot;:&quot;NOT_APPLICABLE&quot;,&quot;isInsideCrossOriginFrame&quot;:false,&quot;source&quot;:&quot;forms-embed-1.4662&quot;,&quot;sourceName&quot;:&quot;forms-embed&quot;,&quot;sourceVersion&quot;:&quot;1.4662&quot;,&quot;sourceVersionMajor&quot;:&quot;1&quot;,&quot;sourceVersionMinor&quot;:&quot;4662&quot;,&quot;allPageIds&quot;:{},&quot;_debug_embedLogLines&quot;:[{&quot;clientTimestamp&quot;:1707897072347,&quot;level&quot;:&quot;INFO&quot;,&quot;message&quot;:&quot;Retrieved pageContext values which may be overriden by the embed context: {\&quot;pageTitle\&quot;:\&quot;The Harris Poll\&quot;,\&quot;pageUrl\&quot;:\&quot;https://theharrispoll.com/\&quot;,\&quot;userAgent\&quot;:\&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36\&quot;,\&quot;isHubSpotCmsGeneratedPage\&quot;:false}&quot;},{&quot;clientTimestamp&quot;:1707897072356,&quot;level&quot;:&quot;INFO&quot;,&quot;message&quot;:&quot;Retrieved countryCode property from normalized embed definition response: \&quot;IN\&quot;&quot;},{&quot;clientTimestamp&quot;:1707897106689,&quot;level&quot;:&quot;INFO&quot;,&quot;message&quot;:&quot;Retrieved analytics values from API response which may be overriden by the embed context: {\&quot;hutk\&quot;:\&quot;73d83e617781d416d6d86026353d1744\&quot;,\&quot;contentType\&quot;:\&quot;standard-page\&quot;}&quot;}]}"><iframe
                                    name="target_iframe_f7aa9e43-69c3-43be-830c-42f8187997b1"
                                    style="display: none;"></iframe>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="footer-spacer" style=""></div>
    <!-- Footer -->
    <footer>
        <div class="wrap">
            <div class="footer-top">
                <div class="tagline-logo">
                    <a href="/" class="logo" title="Home Page"></a>
                    <div class="tagline">We strive to reveal the authentic values of modern society to inspire leaders
                        to create a better tomorrow.</div>
                </div>
                <nav class="footer-nav">
                    <ul id="menu-footer-navigation" class="menu">
                        <li id="menu-item-1351"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1351">
                            <a>Solutions</a>
                            <ul class="sub-menu">
                                <li id="menu-item-2239"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2239"><a
                                        href="https://theharrispoll.com/solutions/questbrand/">QuestBrand</a></li>
                                <li id="menu-item-14748"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14748"><a
                                        href="https://theharrispoll.com/solutions/harris-custom-research/corporate-reputation/">Corporate
                                        Reputation</a></li>
                                <li id="menu-item-14749"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14749"><a
                                        href="https://theharrispoll.com/solutions/harris-custom-research/">Harris
                                        Custom Research</a></li>
                                <li id="menu-item-2240"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2240"><a
                                        href="https://theharrispoll.com/solutions/harris-on-demand/">Harris On
                                        Demand</a></li>
                                <li id="menu-item-14747"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14747"><a
                                        href="https://theharrispoll.com/solutions/thought-leadership-practice/">Thought
                                        Leadership Practice</a></li>
                            </ul>
                        </li>
                        <li id="menu-item-1355"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1355">
                            <a>Insights &amp; News</a>
                            <ul class="sub-menu">
                                <li id="menu-item-2011"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2011"><a
                                        href="https://theharrispoll.com/insights-news/reports/">Reports</a></li>
                                <li id="menu-item-2009"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2009"><a
                                        href="https://theharrispoll.com/insights-news/briefs/">Briefs</a></li>
                                <li id="menu-item-2083"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2083"><a
                                        href="https://theharrispoll.com/insights-news/news-events/">News &amp;
                                        Events</a></li>
                                <li id="menu-item-2010"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2010"><a
                                        href="https://theharrispoll.com/insights-news/case-studies/">Case Studies</a>
                                </li>
                                <li id="menu-item-1360"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1360"><a
                                        href="/contact/">Newsletter</a></li>
                            </ul>
                        </li>
                        <li id="menu-item-1361"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1361">
                            <a>Partners</a>
                            <ul class="sub-menu">
                                <li id="menu-item-1362"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1362"><a
                                        href="/partners/media/">Media</a></li>
                                <li id="menu-item-1363"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1363"><a
                                        href="/partners/universities-non-profits/">Universities &amp; Non-Profits</a>
                                </li>
                            </ul>
                        </li>
                        <li id="menu-item-1364"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1364">
                            <a>Industries</a>
                            <ul class="sub-menu">
                                <li id="menu-item-12585"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12585"><a
                                        href="https://theharrispoll.com/industries/apparel-fashion/">Apparel &amp;
                                        Fashion</a></li>
                                <li id="menu-item-1365"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1365"><a
                                        href="/industries/automotive/">Automotive</a></li>
                                <li id="menu-item-8349"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8349"><a
                                        href="https://theharrispoll.com/industries/sports-entertainment/">Entertainment</a>
                                </li>
                                <li id="menu-item-11441"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11441"><a
                                        href="https://theharrispoll.com/industries/financial-services/">Financial
                                        Services</a></li>
                                <li id="menu-item-8348"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8348"><a
                                        href="https://theharrispoll.com/industries/cpg-food-beverage/">Food &amp;
                                        Beverage</a></li>
                                <li id="menu-item-1367"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1367"><a
                                        href="/industries/healthcare">Healthcare</a></li>
                                <li id="menu-item-11843"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11843"><a
                                        href="https://theharrispoll.com/industries/home-care-products/">Home Care &amp;
                                        Products</a></li>
                                <li id="menu-item-13539"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13539"><a
                                        href="https://theharrispoll.com/industries/personal-care/">Personal Care</a>
                                </li>
                                <li id="menu-item-8346"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8346"><a
                                        href="https://theharrispoll.com/industries/qsr-fast-casual/">QSR &amp; Fast
                                        Casual</a></li>
                                <li id="menu-item-8347"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8347"><a
                                        href="https://theharrispoll.com/industries/retail/">Retail</a></li>
                                <li id="menu-item-8345"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8345"><a
                                        href="https://theharrispoll.com/industries/technology-gaming/">Technology</a>
                                </li>
                                <li id="menu-item-1366"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1366"><a
                                        href="/industries/travel/">Travel</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="footer-bottom">
                <nav class="top-nav">
                    <ul id="menu-top-navigation-2" class="menu">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2013"><a
                                href="https://theharrispoll.com/about/">About</a></li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1344"><a
                                target="_blank" rel="noopener"
                                href="https://jobs.lever.co/harrisinsights">Careers</a></li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2014"><a
                                href="https://theharrispoll.com/contact/">Contact Us</a></li>
                        <li class="search menu-item menu-item-type-post_type menu-item-object-page menu-item-2245"><a
                                href="https://theharrispoll.com/search/">Search</a></li>
                    </ul>
                </nav>
                <div class="social">
                    <ul>
                        <li><a href="https://twitter.com/HarrisPoll" class="twitter">Twitter</a></li>
                        <li><a href="https://www.linkedin.com/company/harris-poll/" class="linkedin">Linkedin</a></li>
                    </ul>
                </div>
                <div class="footer-text">
                    <p>©2024 The Harris Poll, LLC. All Rights Reserved. <a
                            href="https://theharrispoll.com/privacy/">Privacy Policy</a>. <a
                            href="https://theharrispoll.com/gdpr/">GDPR</a>.</p>
                </div>
            </div>
        </div>
    </footer>
    <!-- End Footer -->

    <!-- Scripts -->
    {{-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script> --}}
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"
        integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-migrate-3.3.2.min.js"
        integrity="sha256-Ap4KLoCf1rXb52q+i3p0k2vjBsmownyBTE1EqlRiMwA=" crossorigin="anonymous"></script>

    <script src="{{ asset('js/script.js') }}"></script>
    <script src="{{ asset('js/custom.js') }}"></script>
</body>

</html>
