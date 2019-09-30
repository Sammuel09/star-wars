<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal">
                <header class="modal-header">
                    <slot name="header">
                        This is the default tile!
                    <button
                    type="button"
                    class="btn-close"
                    @click="close"
                    >
                        x
                    </button>
                    </slot>
                </header>
                <section class="modal-body">
                    <slot name="body">
                      I'm the default body!
                    </slot>
                </section>
                <footer class="modal-footer">
                    <slot name="footer">
                    I'm the default footer!
                    <button
                        type="button"
                        class="btn-green"
                        @click="close"
                    >
                       Close me!
                   </button>
                 </slot>
                </footer>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'modal',

  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-fade-enter,
.modal-fade-leave-active {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease
}

.modal-backdrop {
  position: fixed !important;
  top: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  display: flex !important;
  justify-content: center;
  align-items: center;
} 

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex !important;
  flex-direction: column;
} 

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}
.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}
.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}
.modal-body {
  position: relative;
  padding: 20px 10px;
}
.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}
.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}
</style>
