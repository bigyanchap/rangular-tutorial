"""Generate the Rangular Tutorial store artwork.

Design: the framework's dark editor surface (#1e1e1e, the code
token) with a large code glyph, </>, drawn in the code text
colour (#d4d4d4) with the slash in the light blue accent
(#a8c7fa, the dark theme primary). One glyph, no small text:
the icon has to read at home screen size.

Outputs, all 1024 by 1024 PNG:
  icon.png           full bleed dark background, glyph large
  adaptive-icon.png  transparent, glyph inside the safe zone
  splash.png         transparent, glyph plus the app name in
                     large type, shown over the splash
                     background colour from app.json

Run: python3 assets/generate_artwork.py
"""

from PIL import Image, ImageDraw, ImageFont

SURFACE = (30, 30, 30, 255)        # #1e1e1e
CODE_TEXT = (212, 212, 212, 255)   # #d4d4d4
ACCENT = (168, 199, 250, 255)      # #a8c7fa
MONO_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf"
SANS_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
SIZE = 1024


def glyph(draw, cx, cy, font_size):
    """Draw </> centred at (cx, cy), slash in the accent colour."""
    font = ImageFont.truetype(MONO_BOLD, font_size)
    parts = [("<", CODE_TEXT), ("/", ACCENT), (">", CODE_TEXT)]
    widths = [draw.textlength(ch, font=font) for ch, _ in parts]
    total = sum(widths)
    x = cx - total / 2
    for (ch, colour), w in zip(parts, widths):
        draw.text((x, cy), ch, font=font, fill=colour, anchor="lm")
        x += w
    return total


def main():
    # Icon: full bleed, glyph at about 62 percent of the width.
    img = Image.new("RGBA", (SIZE, SIZE), SURFACE)
    d = ImageDraw.Draw(img)
    glyph(d, SIZE / 2, SIZE / 2, 400)
    img.save("assets/icon.png")

    # Adaptive foreground: transparent, glyph inside the safe
    # zone (about half the width), the background colour comes
    # from app.json.
    img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    glyph(d, SIZE / 2, SIZE / 2, 320)
    img.save("assets/adaptive-icon.png")

    # Splash: transparent, glyph above the app name in large
    # type. app.json paints the dark surface behind it.
    img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    glyph(d, SIZE / 2, 360, 300)
    font = ImageFont.truetype(SANS_BOLD, 96)
    d.text((SIZE / 2, 640), "Rangular Tutorial", font=font,
           fill=CODE_TEXT, anchor="ma")
    img.save("assets/splash.png")

    print("wrote assets/icon.png, assets/adaptive-icon.png, assets/splash.png")


if __name__ == "__main__":
    main()
