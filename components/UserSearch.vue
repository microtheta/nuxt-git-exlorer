<script>
import { VueAutosuggest } from 'vue-autosuggest'
import debounce from '../helpers/debounce'

const getInputProps = (isDisabled = false) => {
  return {
    id: 'autosuggest__input',
    disabled: isDisabled,
    placeholder: 'Search for a github username...',
    autoFocus: true,
  }
}

export default {
  components: {
    VueAutosuggest,
  },
  props: ['onSelect'],
  data() {
    return {
      selected: '',
      filteredOptions: [],
      inputProps: getInputProps(),
    }
  },
  methods: {
    onSelected(option) {
      if (option) {
        this.selected = option.item
      } else {
        this.selected = this.filteredOptions[0].data[0]
      }
      if (this.onSelect) {
        this.onSelect(this.selected)
      }
    },
    onInputChange: debounce(async function (text) {
      if (text === '' || text === undefined) {
        return
      }

      this.filteredOptions = [
        {
          data: ['@loader'],
        },
      ]

      try {
        const users = await fetch(
          `https://api.github.com/search/users?q=${text}`
        ).then((data) => data.json())

        const filteredData = users?.items.map((user) => {
          return { name: user.login, avtar: user.avatar_url, id: user.id }
        })

        this.filteredOptions = [
          {
            data: filteredData,
          },
        ]
      } catch (e) {
        //TODO: display message about search not working...
        console.log(e)
        //TODO: Remove!! --
        this.filteredOptions = [
          {
            data: [
              {
                name: 'microthta',
                avtar: 'https://avatars.githubusercontent.com/u/2124979?v=4',
                id: '2124979',
              },
            ],
          },
        ]
      }
    }, 500),
  },
}
</script>

<style>
#autosuggest {
  width: 500px;
  max-width: 100%;
}
#autosuggest__input {
  outline: none;
  position: relative;
  display: block;
  font-family: monospace;
  font-size: 20px;
  border: 1px solid #616161;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

#autosuggest__input.autosuggest__input-open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.autosuggest__results-container {
  position: relative;
  width: 100%;
}

.autosuggest__results {
  font-weight: 300;
  margin: 0;
  position: absolute;
  z-index: 10000001;
  width: 100%;
  border: 1px solid #e0e0e0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  padding: 0px;
  overflow: auto;
  max-height: 200px;
}

.autosuggest__results ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.autosuggest__results .autosuggest__results-item {
  cursor: pointer;
}

#autosuggest ul:nth-child(1) > .autosuggest__results_title {
  border-top: none;
}

.autosuggest__results .autosuggest__results_title {
  color: gray;
  font-size: 11px;
  margin-left: 0;
  padding: 15px 13px 5px;
  border-top: 1px solid lightgray;
}

.autosuggest__results .autosuggest__results-item:active .list-group-item,
.autosuggest__results .autosuggest__results-item:hover .list-group-item,
.autosuggest__results .autosuggest__results-item:focus .list-group-item,
.autosuggest__results
  .autosuggest__results-item.autosuggest__results-item--highlighted
  .list-group-item {
  background-color: #ddd;
}
</style>

<template>
  <div>
    <pre v-if="selected">You have selected: '{{ selected }}'</pre>
    <vue-autosuggest
      :suggestions="filteredOptions"
      @selected="onSelected"
      :input-props="inputProps"
      @input="onInputChange"
    >
      <template slot-scope="{ suggestion }">
        <div v-if="suggestion.item === '@loader'">
          Searching... Please wait, this may take a moment.
        </div>
        <div v-else>
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar
              variant="info"
              :src="suggestion.item.avtar"
              class="mr-3"
            />
            <span class="mr-auto"> {{ suggestion.item.name }}</span>
          </b-list-group-item>
        </div>
      </template>
    </vue-autosuggest>
  </div>
</template>
