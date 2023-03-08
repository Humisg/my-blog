<template>
    <div style="width: 100%">
    <div class="article clearfix">
      <div
        class="article-left fl"
      >
        <div class="header">
          <h1 class="title">{{blogDetail.title}}</h1>
          <div class="author">
            <div class="avatar">
              <img
                class="auth-logo"
                src="../assets/userLogo.jpeg"
                alt="BiaoChenXuYing"
              >
            </div>
            <div class="info">
              <span class="name">
                <span>{{blogDetail.author}}</span>
              </span>
              <div
                props-data-classes="user-follow-button-header"
                data-author-follow-button=""
              />
              <div class="meta">
                <span class="publish-time">
                  时间
                </span>
                <span class="wordage">
                  字数 
                </span>
                <span class="views-count">
                  阅读
                </span>
                <span class="comments-count">
                  评论
                </span>
                <span class="likes-count">
                  喜欢
                </span>
              </div>
            </div>
            <!-- <div
              class="tags "
              title="标签"
            >
              <el-tag
                size="mini"
                v-for="tag in state.articleDetail.tags"
                :key="tag._id"
                class="tag"
                type="success"
              >{{tag.name}}</el-tag>
            </div> -->
            <span class="clearfix" />
          </div>
        </div>
        <div class="content">
          <div
            id="content"
            class="article-detail"
            v-html="blogDetail.content"
          >
          </div>
        </div>
        <!-- <div class="heart">
          <el-button
            type="danger"
            size="large"
            icon="heart"
            :loading="state.isLoading"
            @click="likeArticle"
          >
            点赞
          </el-button>
        </div>
        <div class="comment"> -->
          <!-- <el-input
            placeholder="文明社会，理性评论"
            type="textarea"
            v-model="state.content"
          ></el-input>
          <el-button
            style="margin-top: 15px"
            type="primary"
            :loading="state.btnLoading"
            @click="handleAddComment"
          >发 送</el-button>
        </div> -->
        <!-- <CommentList
          v-if="!state.isLoading"
          :numbers="state.articleDetail.meta.comments"
          :list="state.articleDetail.comments"
          :article_id="state.articleDetail._id"
          @refreshArticle="refreshArticle"
        /> -->
      <!-- </div> -->
      <!-- <div
        v-if="!state.isMobileOrPc"
        style="width: 23%"
        class="article-right fr anchor"
        v-html="state.articleDetail.toc"
      ></div>
      <LoadingCustom v-if="state.isLoading"></LoadingCustom> -->
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
  import LoadingCustom from '@/components/Loading.vue'
  import { ref, onMounted, onBeforeMount } from 'vue'
  import { getBlogDetailApi } from '@/api/modules/blog'
  import { BlogDetail } from '@/api/interface'
  import { useRoute } from 'vue-router'
  
  const blogDetail = ref<BlogDetail>({} as BlogDetail)
  // 获取query参数
    const route = useRoute()
    const postId = route.params.id as string
  console.log(postId, 'blogId');

  const getBlogDetail = async() => {
    blogDetail.value = await getBlogDetailApi({ postId })
    
}

onBeforeMount(getBlogDetail)
</script>

<style lang="scss" scoped>
  .anchor {
    display: block;
    position: sticky;
    top: 213px;
    margin-top: 213px;
    border-left: 1px solid #eee;
    .anchor-ul {
      position: relative;
      top: 0;
      max-width: 250px;
      border: none;
      -moz-box-shadow: 0 0px 0px #fff;
      -webkit-box-shadow: 0 0px 0px #fff;
      box-shadow: 0 0px 0px #fff;
  
      li.active {
        color: #009a61;
      }
    }
    a {
      color: #333;
    }
  }
  .article {
    width: 100%;
    .header {
      .title {
        margin: 20px 0 0;
        text-align: center;
        font-size: 34px;
        font-weight: bold;
      }
      .author {
        position: relative;
        margin: 30px 0 40px;
        padding-left: 50px;
        .avatar {
          position: absolute;
          left: 0;
          top: 0;
          width: 48px;
          height: 48px;
          vertical-align: middle;
          display: inline-block;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .info {
          float: left;
          vertical-align: middle;
          // display: inline-block;
          margin-left: 8px;
          a {
            color: #333;
          }
        }
        .name {
          margin-right: 3px;
          font-size: 16px;
          vertical-align: middle;
        }
        .meta {
          margin-top: 5px;
          font-size: 12px;
          color: #969696;
          span {
            padding-right: 5px;
          }
        }
        .tags {
          float: right;
          padding-top: 15px;
          // padding-right: 20px;
          .tag {
            // padding: 0 10px;
            margin-left: 5px;
            border-right: 2px solid #eee;
          }
        }
      }
    }
    .content {
      min-height: 300px;
    }
  }
  .heart {
    height: 60px;
    text-align: center;
    margin: 50px;
  }
  .loader {
    color: rgb(226, 44, 44);
    text-align: center;
    padding: 50px;
    font-size: 16px;
  }
  .clearfix {
    clear: both;
  }
</style>
  
  