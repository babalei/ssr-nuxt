<template>
  <header class="header">
    <div class="header-logo">
      <a href="/" class="logo-lk"></a>
    </div>
    <div class="header-nav">
      <ul class="nav-list clearfix">
        <li class="nav-item"
          v-for="( item, index) in navList"
          :key="index">
            <a 
              :href="item.link"
              class="nav-lk"
              target="_blank"
            >
              {{ item.title }}
              <i class="iconfont icon-arrow-right"></i>	
            </a>

        </li>
      </ul>
    </div>
    <div class="header-search">
      <div class="search-wrap J_headerSearch">
        <input 
          type="text"
          class="input input-search"
          placeholder="搜索"
        />
        <button class="btn btn-search">
          <i class="iconfont icon-search"></i>
        </button>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Mheader',
  props: {
    navList: Array
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/styles/variable.scss';
.header {
	min-width: 1200px;
	height: 72px;
  box-shadow: 0 5px 5px #ddd;
  background-color: #fff;

  .header-logo {
  	display: inline-block;
		width: 288px;
		height: 72px;
		padding: 8px;
		
		.logo-lk {
			display: block;
			height: 100%;
			background-image: url(~assets/img/logo.png);
			background-repeat:  no-repeat;
		  background-size: 144px 37px;
			background-position: center;
		}
	}

	.header-nav {
		display: inline-block;

		.nav-list {
			.nav-item {
				float: left;
				height: 72px;
				padding-left: 70px;
				line-height: 72px;
				font-size: 18px;

				.nav-lk {
					position: relative;
					transition: color .3s;

					&::after {
						position: absolute;
						left: 0;
						bottom: -8px;
						content: "";
						display: block;
						width: 0;
						height: 2px;
						background-color: $defaultColor;
						transition: width .3s;
					}

					&:hover {
						color: $defaultColor;

						&::after {
							width: 100%;
						}
					}
				}
			}
		}
	}

	.header-search {
		float: right;
		position: relative;
		width: 240px;
		height: 40px;
		margin: 16px 15px 0 0;
    
    .input-search {
    	position: absolute;
    	top: 0;
    	left: 0;
    	width: 200px;
    	height: 40px;
    	text-indent: 10px;
    }

    .btn-search {
    	position: absolute;
    	top: 0;
    	right: 0;
    	width: 40px;
    	height: 40px;
    }
	}
}
</style>
