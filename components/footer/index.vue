<template>
  <footer class="footer">
	  <div class="footer-inner">

      <!-- <div class="footer-info clearfix">
        <div class="info-item">
          <h1 class="info-tt">官方手册集合</h1>
          <ul class="manual-list clearfix">
            <li class="manual-item">
              <div class="manual-item-wrap">
                <a 
                  href=""
                  class="manual-lk"
                  target="_blank"
                  style="
                    background: url(<%= item.logoUrl %>);
                    background-size: <%= item.bgSize %>;
                    background-position: <%= item.bgPosition %>;
                  "
                ></a>
                <p class="item-tt"> item.title </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="info-item">
          <h1 class="info-tt">合作平台链接</h1>
          <ul class="link-list clearfix">
            <li class="link-item">
              <div class="link-item-wrap">
                <a 
                  href="<%= item.link %>"
                  class="link-lk"
                  target="_blank"
                >
                  <img 
                    src="<%= item.logoUrl %>" 
                    alt="<%= item.title %>"
                    class="link-img"
                  />
                </a>
                <p class="item-tt">
                  <a href="<%= item.link %>">
                    item.title
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="info-item">
          <h1 class="info-tt">课程微信咨询与问题答疑</h1>
          <img 
            src="<%= qrInfomation %>" 
            alt="课程微信咨询与问题答疑"
            class="qr-img"
          >
        </div>
      </div> -->


      <div class="footer-bottom">
        <p>Copyright © 2018-2023 信息有限公司</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Mfooter'
}
</script>
<style lang="scss" scoped>
.footer {
  min-width: 1200px;
	background-color: #3c3c3c;

	.footer-inner {
		width: 1200px;
		margin: 0 auto;

		.footer-info {
      padding: 50px 0;
      
      .info-item {
      	float: left;
        
        .info-tt {
          color: #fff;
          font-size: 20px;
          text-align: center;
          margin-bottom: 40px;
    		}

      	&:nth-child(1) {
      		width: 332px;

      		.manual-item {
      			float: left;
      			width: 156px;
      			margin: 0 10px 20px 0;

      			.manual-item-wrap {
      				.manual-lk {
      					display: block;
      					width: 156px;
      					height: 60px;
      					transition: all .3s;

      					&:hover {
      						box-shadow: 0 0 10px #ddd;
	      					transform: scale(1.1);
	      				}
      				}

      				.item-tt {
      					margin-top: 10px;
      					text-align: center;
      					font-size: 16px;
      					color: #cdcdcd;
      				}
      			}
      		}
      	}

      	&:nth-child(2) {
      		width: 620px;

      		.link-item {
      			width: 100%;

      			.link-item-wrap {
      				width: 220px;
      				margin: 0 auto 50px;

      				.link-lk {
      					display: inline-block;
      				}

      				.link-img {
	      				width: 60px;
	      				height: 60px;
	      				vertical-align: middle;
                transition: transform .3s;

                &:hover {
                  transform: scale(1.1);
                }
	      			}

	      			.item-tt {
	      				display: inline-block;
                margin-left: 15px;
                font-size: 18px;

                a {
                	color: #ddd;
                }
	      			}
      			}
      		}
      	}

      	&:nth-child(3) {
	      	width: 248px;

	      	.qr-img {
	      		display: block;
	      		width: 220px;
	      		margin: 0 auto;
            transition: all .3s;

            &:hover {
              box-shadow: 0 0 10px #ddd;
              transform: scale(1.1);
            }
	      	}
	      }
      }
		}
	}

	.footer-bottom {
		height: 80px;
		border-top: 1px solid #666;
		line-height: 80px;

		p {
      text-align: center;
      color: #cdcdcd;
		}
	}
}  
</style>