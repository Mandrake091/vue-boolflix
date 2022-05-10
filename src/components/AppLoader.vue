<template>
<div class="loader">
	<div class="mosaic-loader">
    <div class="cell d-0"></div>
    <div class="cell d-1"></div>
    <div class="cell d-2"></div>
    <div class="cell d-3"></div>
    <div class="cell d-1"></div>
    <div class="cell d-2"></div>
    <div class="cell d-3"></div>
    <div class="cell d-4"></div>
    <div class="cell d-2"></div>
    <div class="cell d-3"></div>
    <div class="cell d-4"></div>
    <div class="cell d-5"></div>
    <div class="cell d-3"></div>
    <div class="cell d-4"></div>
    <div class="cell d-5"></div>
    <div class="cell d-6"></div>
    </div>
</div>
</template>

<script>
export default {
    name: 'AppLoader'
}
</script>

<style lang="scss" scoped>
$--p-1: #d4aee0;
$--p-2: #8975b4;
$--p-3: #64518a;
$--p-4: #565190;

$--b-1: #44abac;
$--b-2: #2ca7d8;
$--b-3: #1482ce;
$--b-4: #05597c;

$--g-1: #b2dd57;
$--g-2: #57c443;
$--g-3: #05b853;
$--g-4: #19962e;

$--y-1: #fdc82e;
$--y-2: #fd9c2e;
$--y-3: #d5385a;
$--y-4: #911750;

$--s-1: #d9d9d9;
$--s-2: #9e9e9e;
$--s-3: #666666;
$--s-4: #2b2b2b;

$colors: (
  $--p-1,
  $--p-2,
  $--p-3,
  $--p-4,
  $--b-1,
  $--b-2,
  $--b-3,
  $--b-4,
  $--g-1,
  $--g-2,
  $--g-3,
  $--g-4,
  $--y-1,
  $--y-2,
  $--y-3,
  $--y-4,
);

.loader{
  background: rgba(0, 0, 0, 0.545);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}

.mosaic-loader {
  --cell-size: 64px;
  --cell-spacing: 1px;
  --border-width: 1px;
  --cells: 4;
  --total-size: calc(var(--cells) * (var(--cell-size) + 2 * var(--cell-spacing)));
  
  display: flex;
  flex-wrap: wrap;
  width: var(--total-size);
  height: var(--total-size);
  
  > .cell {
    --cell-color: white;
    flex: 0 0 var(--cell-size);
    margin: var(--cell-spacing);
    background-color: transparent;
    box-sizing: border-box;
    border: var(--border-width) solid var(--cell-color);
    
    animation: 1.5s ripple ease infinite;
    
    $delays: (2 * 4) - 2;
    @for $i from 1 through $delays {
      &.d-#{$i} {
        animation-delay: $i * 100ms;
      }
    }
    
    @for $i from 1 through length($colors) {
      &:nth-child(#{$i}) {
        --cell-color: #{nth($colors, $i)};
      }
    }
  }
}

@keyframes ripple {
  0% {
    background-color: transparent;
  }
  
  30% {
    background-color: var(--cell-color);
  }
  
  60% {
    background-color: transparent;
  }
  
  100% {
    background-color: transparent;
  }
}
</style>