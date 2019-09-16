<template>
<div>
  <div style="margin-bottom: 20px;">
    <el-button
      size="small"
      @click="addTab(editableTabsValue2)"
    >
      add tab
    </el-button>
  </div>
  <el-tabs v-model="editableTabsValue2" type="card" @tab-remove="removeTab">
    <el-tab-pane
      v-for="(item, index) in editableTabs2"
      :key="item.name"
      :label="item.title"
      :name="item.name"
      :closable="item.closable"
    >
      <!-- {{item.content}} -->
      <!-- <div>dsafs</div> -->
      <component :is="item.component" @rowClick="getRowData" :rowData="item.row"></component>
    </el-tab-pane>
  </el-tabs>
</div>
</template>
<script>
  import table1 from './table1.vue';
  import table2 from './table2.vue';

  export default {
    data() {
      return {
        editableTabsValue2: '1',
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content',
          closable: false,
          component: 'table1'
        }],
        tabIndex: 1
      }
    },
    components: {
      table1,
      table2
    },
    methods: {
      getRowData(row) {
        console.log(row)
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: row.province,
          name: newTabName,
          component: 'table2',
          closable: true,
          row
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>