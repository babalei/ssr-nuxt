<template>
  <div class="teacher-board clearfix">

    <div class="teacher-item" v-for="item in teacher" :key="item.id">
      <div class="img-wrap last" >
				<img :src="item.avator" class="teacher-img" />
        <i class="triangle-right"></i>
      </div>
      <div class="teacher-info">
        <div class="teacher-header">
          <h1 class="teacher-name"> {{ item.teacherName }} </h1>
        </div>
        <p class="count">
          <span>资历：{{ item.tag}}</span>
          <i></i>
        </p>
        <p class="intro"> {{ item.intro }} </p>
      </div>
    </div>
  
  </div>
</template>
<script>
export default {
	name: 'Teacher',
	props: {
		teacher: Array
	}
}
</script>
<style lang="scss" scoped>
@import '~assets/styles/variable.scss';

.teacher-board {
	width: 1200px;
	margin: 40px auto;

	.teacher-item {
		float: left;
		width: 50%;
		margin-bottom: 50px;

		.img-wrap {
			float: left;
			position: relative;
			width: 136px;
			height: 136px;
			border-radius: 50%;
			overflow: hidden;

			.triangle-right {
				top: 51px;
				right: -28px;
				position: absolute;
				border-left-color: $infoBgColor;
			}

			&.student {
				.triangle-right {
					border-left-color: $successBgColor;
				}
			}

			&.last {
				margin-left: 28px;
			}
      
      .teacher-img {
      	width: 100%;
      	box-shadow: 1px 3px 5px #ccc;
      	border: 3px solid $infoBgColor;
      	box-sizing: border-box;
      	transition: box-shadow .3s;

      	&:hover {
      		box-shadow: 2px 4px 6px #999;
      	}
      }

      &.student {
				.teacher-img {
					border: 3px solid $successBgColor;
				}
			}
		}

		.teacher-info {
			float: left;
			position: relative;
			width: 400px;
			height: 290px;
			padding: 15px;
			margin-left: 35px;
			box-sizing: border-box;
			background-color: #fff;
			border-radius: 10px;
			box-shadow: 1px 3px 5px #ccc;
			overflow: hidden;
			transition: box-shadow .3s;

			&:hover {
				box-shadow: 2px 4px 6px #999;
			}

			&.student {
        height: 210px;

				.teacher-header {
					background-color: $successBgColor;
				}
      }

			.teacher-header {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 44px;
				padding: 0 15px;
				box-sizing: border-box;
        line-height: 44px;
        background-color: $infoBgColor;



				.teacher-name {
					font-size: 20px;
					color: #fff;

					a {
						color: #fff;
						transition: font-size .3s;

						&:hover {
							font-size: 21px;
						}
					}
				}
			}

			.count {
				height: 40px;
				margin: 35px 0 15px;
				border-bottom: 1px solid #ddd;
				line-height: 40px;
			  color: #666;
			  text-overflow: ellipsis;
			  white-space: nowrap;
			  overflow: hidden;

			  a {
			  	&:hover {
			  		color: $defaultColor;
			  	}
			  }

				span:nth-child(3) {
					float: right;
				}
			}

			.intro {
				text-indent: 2em;
				line-height: 30px;
			}
		}
	}
}
</style>