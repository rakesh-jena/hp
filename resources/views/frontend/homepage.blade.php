@extends('frontend')
@section('content')
    <div id="home-intro-spacer" style="height: 905.234px;"></div>
    <div class="hero near-black-bg home-section-1" style="">
        <div class="wrap std-wrap">
            
            <div class="list" style="transform: translateY(0px);">
                
            </div>
        </div>
    </div>
    <div id="after-home-section" class="">
        <div class="home-solutions">
            <br><br>
            <div class="">
                <div class="wrap std-wrap">
                     <style>
      .cls-1 {
        fill: #fee6e0;
      }

      .cls-1, .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #ff8769;
      }
      


@keyframes markerAnimationCls1 {
  0%, 100% {
    r: 28.5;
    opacity: 1;
  }
  50% {
    r: 34.2;
    opacity: 0.5;
  }
}

@keyframes markerAnimationCls2 {
  0%, 100% {
    r: 15.25;
    opacity: 1;
  }
  50% {
    r: 16.7; /* Adjust the value to increase the diameter for cls-2 */
    opacity: 1;
  }
}

.cls-1 {
  transform-origin: center;
  animation: markerAnimationCls1 2s infinite;
}

.cls-2 {
  transform-origin: center;
  animation: markerAnimationCls2 2s infinite;
  cursor:pointer;
}

.tooltip {
      position: absolute;
      display: none;
      background-color: #ffffff;
      border: 1px solid #dddddd;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      max-width: 250px;
     
    }
    .tooltip-show {
    opacity: 1;
    }
    
    .tooltip-content {
      font-size: 14px;
      color: #333;
    }

    .tooltip-close {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      font-weight: bold;
    font-size: 14px;
    color: #555;
    }
    
    .salmonpink {
        color:#ff8769;
    }


    </style>

    <div class="tooltip" id="tooltip1">
    <span class="tooltip-close" onclick="closeTooltip('tooltip1')">X</span>
    This is a tooltip for Group 1
    </div>
    
    <div class="tooltip" id="tooltip2">
     <span class="tooltip-close" onclick="closeTooltip('tooltip2')">X</span>
     This is a tooltip for Group 2
     </div>
  

  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2306.4 1214.64">
    <defs>
      <style>
        .cls-1, .cls-2 {
          stroke-width: 0px;
        }
      </style>
    </defs>
    <image width="9610" height="5061" transform="scale(.24)" xlink:href="{{ asset('public/assets/img/AdobeStock_71874838.jpeg') }}"/>
      
    <g>
      <circle class="cls-1" cx="471" cy="436" r="28.5"/>
      <circle class="cls-2 circle1" cx="470.75" cy="435.75" r="17.25"/>
    </g>
    <g>
      <circle class="cls-1" cx="1619.98" cy="549.25" r="28.5"/>
      <circle class="cls-2 circle2" cx="1619.73" cy="549" r="17.25"/>
    </g>
  </svg>


  
  <script>
  document.querySelector('.circle1').addEventListener('click', function () {
    toggleTooltip('tooltip1');
  });

  document.querySelector('.circle2').addEventListener('click', function () {
    toggleTooltip('tooltip2');
  });

  function toggleTooltip(tooltipId) {
    var tooltip = document.getElementById(tooltipId);
    tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';

   
  }

  function closeTooltip(tooltipId) {
    var tooltip = document.getElementById(tooltipId);
    tooltip.style.display = 'none';
  }
</script>
  
                </div>
            </div>
        </div>
       
        <div class="home-transforming-marketing light-blue-bg">
            <div class="wrap std-wrap">
                <div class="std-content">
                    <h2 class="salmonpink" style="text-align: center;">Exalt data analysis provides you with verified, third-party analysis that you can trust. We’re industry leader. You can count on our research-based consulting to provide you with accurate and trusted data to make key business decisions, avoid risk, and maximize growth.</h2>
                </div>
               
            </div>
        </div>
      

       
     
      
       
    </div>
@endsection
