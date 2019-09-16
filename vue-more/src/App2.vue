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
      :closable = "item.closable"
    >
      <component :is="'datatable2'" :add="item.data" @check="checkData"></component>
    </el-tab-pane>
  </el-tabs>
</div>

</template>

<script>
import datatable1 from './datatable';
import datatable2 from './datatable2';
  export default {
    data() {
      return {
        datatable: 'datatable1',
        editableTabsValue2: '1',
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'datatable1',
          closable: false
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'datatable2',
          closable: true
        }],
        tabIndex: 1
      }
    },
    components: {
      datatable1,
      datatable2
    },
    methods: {
      checkData(data) {
        this.editableTabs2.push({
          title: data.date,
          name: data.date,
          content: 'datatable2',
          data: data,
          closable: true
        });
        this.editableTabsValue2 = data.date;
      },

      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
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


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
