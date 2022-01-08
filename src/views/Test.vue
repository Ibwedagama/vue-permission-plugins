<template>
  <div>
    <h1>Permission Plugin</h1>
    <div v-if="$permission('can-read')">
      <p>This only show when user has <b>can-read</b> permission</p>
    </div>
    <div v-if="$permission('can-edit')">
      <button>EDIT</button>
    </div>
    <br />
    <div v-if="$permission('can-delete')">
      <button>DELETE</button>
    </div>
    <br />
    <div v-if="$permission('looney')">
      <h1>This will not show because user doesn't have `looney` permission</h1>
    </div>
  </div>
</template>