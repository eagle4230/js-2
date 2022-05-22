Vue.component('filter-el', {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `
	<form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <input type="search" class="search-field" v-model="userSearch" placeholder="Искать товары">
                <button type="submit" class="btn-search">
                    <i class="fas fa-search"></i>
                </button>
            </form>
		`
})
