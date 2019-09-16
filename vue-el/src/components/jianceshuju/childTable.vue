<template>
  <div ref="tableDiv">
    <div class="select_con">
      <el-select v-model="monitor" placeholder="请选择采集点" size="small">
        <el-option
          v-for="(item,index) in options.monitor"
          :key="index"
          :label="item.split(',')[1]"
          :value="item">
        </el-option>
      </el-select>
      <el-select v-model="crowdIndustry" placeholder="请选择人群" size="small">
        <el-option
          v-for="(item,index) in options.crowdIndustry"
          :key="index"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
      <el-select v-model="categoryType" placeholder="请选择人群分类" size="small">
        <el-option
          v-for="(item,index) in options.categoryType"
          :key="index"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
      <el-select v-model="ageGroup" placeholder="请选择年龄分组" size="small">
        <el-option
          v-for="(item,index) in options.ageGroup"
          :key="index"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
      <el-select v-model="gender" placeholder="请选择性别" size="small">
        <el-option
          v-for="(item,index) in options.gender"
          :key="index"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
    </div>
    <el-table ref="table"
              :header-cell-style="{background:'#f9fcfe'}"
              v-loading="loading"
              element-loading-text="数据正在加载中"
              element-loading-spinner="el-icon-loading"
              stripe
              show-summary
               :summary-method="getSummaries"
              align="center"
              :data="tableData"
              style="width: 100%">
      <el-table-column
                       fixed
                       prop="id"
                       label="ID"
                       width="250"
                       column-key="id"
                       align="center"
                       header-align="center"
                       highlight-current-row="true"
                       label-class-name="pm-quality-table-header-label">
      </el-table-column>
      <el-table-column
        v-for="item in tableHeaders"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :column-key="item.prop"
        :width="item.width"
        align="center"
        header-align="center"
        highlight-current-row="true"
        label-class-name="pm-progress-table-header-label">
      </el-table-column>
    </el-table>
    <!--<el-pagination background
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="page.currentPage"
                   :pager-count='page.pagerCount'
                   :page-sizes="[10, 20, 30, 50]"
                   :page-size="page.pageSize"
                   layout="total, sizes, pager, jumper"
                   :total="page.total">
    </el-pagination>-->
  </div>
</template>

<script>
  // import tableData from '@/api/progress'

  export default {
    data() {
      return {
        loading:true,
        page: {
          total: 0,
          pageSize: 20,
          pagerCount: 5,
          currentPage: 1,
        },
        tableHeaders: [
          {prop: "age", label: "年龄"},
          {prop: "genderName", label: "性别", width: '70'},
          {prop: "nation", label: "民族", width: '80'},
          {prop: "province", label: "省份/行业"},
          {prop: "city", label: "地市"},
          {prop: "samplePoint", label: "抽样点"},
          {prop: "town", label: "城乡"},
          {prop: "changetown", label: "乡村变城镇",width: '150'},
          {prop: "dateBirth", label: "出生日期"},
          {prop: "dateTest", label: "测试日期"},
          {prop: "reviewed", label: "已复测"},
          {prop: "height", label: "身高(cm)"},
          {prop: "heightScore", label: "身高得分"},
          {prop: "heightEvaluation", label: "身高评价",width: '300'},
          {prop: "settingHeight", label: "坐高(cm)"},
          {prop: "weight", label: "体重(kg)"}
        ],
        spanRows: [],
        options: {
          categoryType: [],
          ageGroup: [],
          crowdIndustry: [],
          gender: [],
          monitor: []
        },
        monitor: '',
        crowdIndustry: '',
        categoryType: '',
        ageGroup: '',
        gender: '',
        comTableData: [],
        optionsParams: {}
      }
    },
    created() {
      // console.log(tableData)
      // let page = tableData.data;
      // this.page.currentPage = page.currentPage;
      // this.page.pageSize = page.pageSize;
      // this.page.total = page.total;
      // this.tableData = page.data;
      
      // this.progressData();
      // this.getSelectOptions();
    },
    watch: {
      monitor() {
        if(!this.monitor || this.monitor == '4,全部') {
          this.optionsParams = {}
          // delete  this.optionsParams.monitor
        } else {
           this.optionsParams.monitorId = this.monitor.split(',')[0];
        }
        this.getSelectOptions()
      },
      crowdIndustry() {
        if(!this.crowdIndustry || this.crowdIndustry == '全部') {
          this.optionsParams = {}
        } else {
          this.optionsParams.crowdIndustry = this.crowdIndustry;
        }
        this.getSelectOptions()
      },
      categoryType() {
        if(!this.categoryType || this.categoryType == '全部') {
          this.optionsParams = {}
        } else {
          this.optionsParams.categoryType = this.categoryType;
        }
        this.getSelectOptions()
      },
      ageGroup() {
        if(!this.ageGroup || this.ageGroup == '全部') {
          this.optionsParams = {}
        } else {
          this.optionsParams.ageGroup = this.ageGroup;
        }
        
        this.getSelectOptions()
      },
      gender() {
        if(!this.gender || this.gender == '全部') {
          this.optionsParams = {}
        } else {
          let gender;
          if(this.gender === '男') {
            this.optionsParams.gender = '1';
          } else {
            this.optionsParams.gender = '0'
          }
        }
        this.getSelectOptions();
      }
    },
     computed: {
      tableData: {
        get: function () {
          const arr = this.comTableData.filter((item) => {
            if(this.monitor && this.monitor != '4,全部') {
              if(item.monitorName !== this.monitor.split(',')[1] ) {
                return false;
              }
            }
            if(this.crowdIndustry && this.crowdIndustry != '全部') {
              if(item.crowdIndustry !== this.crowdIndustry ) {
                return false;
              }
            }
            if(this.categoryType && this.categoryType != '全部') {
              if(item.categoryType !== this.categoryType ) {
                return false;
              }
            }
            if(this.ageGroup && this.ageGroup != '全部') {
              if(item.ageGroup !== this.ageGroup ) {
                return false;
              }
            }
            if(this.gender && this.gender !== '全部') {
              let gender;
              if(this.gender === '男') {
                gender = '1';
              } else {
                gender = '0'

              }
              if((item.gender + '') !== gender ) {
                return false;
              }
            }
            return true;
          })
          return arr;
        },

        set: function (newValue) {
          // console.log(newValue)
          this.comTableData = newValue;
        }
      }
    },
    methods: {
      initSpanRows() {
        let i, num, province;
        for (let index in this.tableData) {
          let item = this.tableData[index];
          if (index == 0) {
            i = 0;
            num = 0;
            province = item.province;
          }
          if (province == item.province) {
            this.spanRows[index] = 0;
            num++;
          } else if (province != item.province) {
            this.spanRows[i] = num;
            i = index;
            num = 1;
            province = item.province;
          }
        }
        this.spanRows[i] = num;
        console.log(this.spanRows);
      },
      spanMethod({row, column, rowIndex, columnIndex}) {
        if (columnIndex == 0) {
          return [this.spanRows[rowIndex], 1]
        }
      },
      handleSizeChange() {

      },
      handleCurrentChange() {

      },
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '汇总';
            return;
          }
          if(index === 3) {
            sums[index] = '--';
            return
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index];
          } else {
            sums[index] = '--';
          }
        });

        return sums;
      },
      progressData() {
        this.$http.post('/progress/detail')
        .then(res => {
          this.loading = false;
          this.tableData = res.data;
          this.tableData.forEach(item => {
          if(item.gender == '1') {
            item.genderName = '男'
          } else {
            item.genderName = '女'
          };
          item.completionRate=parseFloat(item.completionRate).toFixed(4)*100+'%';
            
          })
        })
        .catch(err => {
          console.log('progressList失败', err)
        })
      },
      getSelectOptions() {
        this.$http.post('/progress/option', this.optionsParams) 
        .then(res => {
        this.options.categoryType = ['全部'].concat(res.data.categoryType);
        this.options.ageGroup = ['全部'].concat(res.data.ageGroup);
        this.options.crowdIndustry = ['全部'].concat(res.data.crowdIndustry);
        this.options.gender = ['全部'].concat(res.data.gender);
        this.options.gender = this.options.gender.map((gender) => {
          switch (gender) {
            case '0':
              return '女'
            case '1':
              return '男'
            default:
              return  '全部'
          }
        });
        this.options.monitor = ['4,全部'].concat(res.data.monitor);

        })
        .catch(err => {
          // console.log('getOption失败', err);
        })
      }
    }
  }
</script>
<style>
  .el-input--small {
    font-size: 12px !important;
  }
  .el-select-dropdown__item {
    font-size: 12px !important;
  }
</style>
