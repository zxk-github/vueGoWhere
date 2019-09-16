<template>
  <div>
    <el-table
      :data="tableData6"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px">
      <el-table-column
        prop="crowdIndustry"
        label="类别"
        width="180">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="categoryType"
        label="种类">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData6: [],
        spanArr: [],
        pos: ''
      };
    },
    mounted() {
      setTimeout(() => {
        this.tableData6 = [
          {"province":"北京","citytown":"海淀","crowdIndustry":"幼儿","categoryType":"农村幼儿","ageGroup":"3","gender":0,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"幼儿","categoryType":"农村幼儿","ageGroup":"3","gender":1,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"幼儿","categoryType":"农村幼儿","ageGroup":"4","gender":0,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"幼儿","categoryType":"农村幼儿","ageGroup":"4","gender":1,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"幼儿","categoryType":"农村幼儿","ageGroup":"5","gender":0,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"老人","categoryType":"农村幼儿","ageGroup":"5","gender":1,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"老人","categoryType":"农村幼儿","ageGroup":"6","gender":0,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"幼儿","categoryType":"农村幼儿","ageGroup":"6","gender":1,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"幼儿","categoryType":"农村幼儿","ageGroup":"6","gender":1,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"幼儿","categoryType":"农村幼儿","ageGroup":"6","gender":1,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"年轻人","categoryType":"农村幼儿","ageGroup":"6","gender":1,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"年轻人","categoryType":"农村幼儿","ageGroup":"6","gender":1,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"年轻人","categoryType":"农村幼儿","ageGroup":"6","gender":1,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"年轻人","categoryType":"农村幼儿","ageGroup":"6","gender":1,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"年轻人","categoryType":"农村幼儿","ageGroup":"6","gender":1,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"年轻人","categoryType":"农村幼儿","ageGroup":"6","gender":1,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"年轻人","categoryType":"农村幼儿","ageGroup":"6","gender":1,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"幼儿","categoryType":"农村幼儿","ageGroup":"6","gender":1,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"年轻人","categoryType":"农村幼儿","ageGroup":"6","gender":1,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"幼儿","categoryType":"农村幼儿","ageGroup":"6","gender":1,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
          {"province":"北京","citytown":"海淀","crowdIndustry":"幼儿","categoryType":"农村幼儿","ageGroup":"6","gender":1,"goal":80,"uploaded":0,"satisfied":0,"onePass":0,"retestPass":0,"wrong":0,"onePassRate":"0.00%","retestPassRate":"0.00%","satisfiedRate":"0.00%"},
        ],
      
        this.getSpanArr(this.tableData6)
      }, 1000);
    },
    methods: {

      getSpanArr(data) {　
        for (var i = 0; i < data.length; i++) {
              if (i === 0) {
                this.spanArr.push(1);
                this.pos = 0
              } else {
                // 判断当前元素与上一个元素是否相同
                if (data[i].crowdIndustry === data[i - 1].crowdIndustry) {
                  this.spanArr[this.pos] += 1;
                  this.spanArr.push(0);
                } else {
                  this.spanArr.push(1);
                  this.pos = i;
                }
              }
          }
      },
      
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          const _row = this.spanArr[rowIndex];
          const _col = _row > 0 ? 1 : 0;
          return {
            rowspan: _row,
            colspan: _col
          }
        }
      }
    }
  };
</script>