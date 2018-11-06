<template>
    <div>
        <h1>详情</h1>
        <div>
            <router-link :to="{name: 'productDetail', params: {id: 123}}">项目123</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
