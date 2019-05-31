
<form action="" method="post">
    
    <?php foreach ($items as $i => $text) : ?>
        <input type="text" value='<?= $text ?>' name='items[<?= $i ?>]'> 
    <?php endforeach; ?>
    
    <input type="text" value='' name="items[<?= count($items) ?>]">
    <button name="submit" type="submit">Add</button>
</form>

