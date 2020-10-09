import { BlendMode } from '../constants/blend-mode';
import { PropertyType } from '../constants/PropertyType';
import { ShapeType } from '../constants/ShapeType';
import { Property } from '../properties/property';
import { Shape } from './Shape';

export class TrimShape extends Shape {
  /**
   * Shape type
   */
  public readonly type = ShapeType.TRIM;

  public blendMode: BlendMode = BlendMode.NORMAL;

  public trimEnd: Property = new Property(PropertyType.NUMBER);

  public trimOffset: Property = new Property(PropertyType.NUMBER);

  public trimStart: Property = new Property(PropertyType.NUMBER);

  public static fromJSON(json: Record<string, any>): TrimShape {
    const shape = new TrimShape();

    // Base shape
    shape.classNames = json.cl;
    shape.id = json.ln;
    shape.isHidden = json.hd;
    shape.matchName = json.mn;
    shape.name = json.nm;

    // This shape
    shape.blendMode = json.bm in BlendMode ? json.bm : BlendMode.NORMAL;
    shape.trimEnd = Property.fromJSON(PropertyType.NUMBER, json.e);
    shape.trimOffset = Property.fromJSON(PropertyType.NUMBER, json.o);
    shape.trimStart = Property.fromJSON(PropertyType.NUMBER, json.s);

    return shape;
  }

  /**
   * Convert the class instance to Lottie JSON object.
   *
   * Called by Javascript when serializing object with JSON.stringify()
   *
   * @returns       JSON object
   */
  public toJSON(): Record<string, any> {
    return {
      ty: this.type,

      // Base shape
      cl: this.classNames,
      hd: this.isHidden,
      ln: this.id,
      mn: this.matchName,
      nm: this.name,

      // This shape
      bm: this.blendMode,
      e: this.trimEnd,
      o: this.trimOffset,
      s: this.trimStart,
    };
  }
}
