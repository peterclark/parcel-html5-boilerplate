export tag Listen

  def pauseAllAudio
    audio.pause for audio in document.querySelectorAll('audio')

  def toggleAudio audio
    if audio.dom:paused
      pauseAllAudio
      play audio.dom
    else
      pause audio.dom

  def play audio
    audio.play

  def pause audio
    audio.pause

  def render
    <self>
      <div.ui.vertical.stripe.segment#listen>
        <div.ui.container>
          <h3.ui.horizontal.divider.header>
            <i.music.icon>
            "Listen"

        <div.ui.container>
          <div.ui.equal.width.stackable.grid>
            <div.column>
              <a.ui.massive.fluid.animated.fade.gray.music.button :tap.prevent.toggleAudio(@autumn)>
                <audio@autumn>
                  <source src='autumn.mp3'>
                <div.hidden.content>
                  <i.play.icon>
                <div.visible.content>
                  <i.play.icon>
                  "Autumn"
            <div.column>
              <a.ui.massive.fluid.animated.fade.gray.music.button :click.prevent.toggleAudio(@bouree)>
                <audio@bouree>
                  <source src='bouree.mp3'>
                <div.hidden.content>
                  <i.play.icon>
                <div.visible.content>
                  <i.play.icon>
                  "Bouree"
            <div.column>
              <a.ui.massive.fluid.animated.fade.gray.music.button :click.prevent.toggleAudio(@canon)>
                <audio@canon>
                  <source src='canon.mp3'>
                <div.hidden.content>
                  <i.play.icon>
                <div.visible.content>
                  <i.play.icon>
                  "Canon"
            <div.column>
              <a.ui.massive.fluid.animated.fade.gray.music.button :click.prevent.toggleAudio(@frivolity)>
                <audio@frivolity>
                  <source src='frivolity.mp3'>
                <div.hidden.content>
                  <i.play.icon>
                <div.visible.content>
                  <i.play.icon>
                  "Frivolity"
